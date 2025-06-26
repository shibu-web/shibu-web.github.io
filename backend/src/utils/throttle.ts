export class Throttle {
  public maxPendingPromises: number;
  private pendingPromises = 0;
  private queue: { promise: () => Promise<void>; type: string }[] = [];
  private mutex: Promise<void> = Promise.resolve();

  constructor(maxPendingPromises: number) {
    this.maxPendingPromises = maxPendingPromises;
  }

  async add<T>(
    promiseGenerator: () => Promise<T>,
    type: string = 'none',
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const executePromise = async (): Promise<void> => {
        this.pendingPromises++;
        try {
          const value = await promiseGenerator();
          resolve(value);
        } catch (error) {
          reject(error as Error);
        } finally {
          this.pendingPromises--;
          await this.processQueue();
        }
      };

      this.mutex = this.mutex.then(async () => {
        if (this.pendingPromises >= this.maxPendingPromises) {
          this.queue.push({ promise: executePromise, type: type });
        } else {
          await executePromise();
        }
      });
    });
  }

  private async processQueue() {
    if (
      this.queue.length > 0 &&
      this.pendingPromises < this.maxPendingPromises
    ) {
      const nextPromise = this.queue.shift();
      if (nextPromise) {
        await nextPromise.promise();
      }
    }
  }
}
