import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { CustomLoggerService } from 'src/custom-logger/custom-logger.service';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// CustomLoggerService の依存関係のモックをインポートまたは定義 (実際のパスに注意)
// import { RequestIdService } from 'src/request-id/request-id.service';
// import { Config } from 'src/config';
// import { NotionTransportService } from 'src/custom-logger/notionTransport.service';
// import { DiscordWebhookTransportService } from 'src/custom-logger/discordWebhookTransport.service';

// モックオブジェクトの型定義 (任意ですが推奨)
interface MockCustomLoggerService {
  log: ReturnType<typeof vi.fn>;
  error: ReturnType<typeof vi.fn>;
  warn: ReturnType<typeof vi.fn>;
  debug: ReturnType<typeof vi.fn>;
  verbose: ReturnType<typeof vi.fn>;
}

// // モックオブジェクトの型定義 (CustomLoggerServiceの依存関係)
// interface MockRequestIdService { getRequestId: jest.Mock; }
// interface MockConfig { /* ...Configのプロパティのモック... */ ENVIRONMENT: string; WINSTON_DISCORD_WEBHOOK_URL?: string; WINSTON_NOTION_DB_ID?: string; WINSTON_NOTION_SECRET?: string; }
// interface MockNotionTransportService { /* ...NotionTransportServiceのメソッドのモック... */ }
// interface MockDiscordWebhookTransportService { /* ...DiscordWebhookTransportServiceのメソッドのモック... */ }

describe('TestController', () => {
  let controller: TestController;
  let mockLogger: MockCustomLoggerService;

  beforeEach(async () => {
    // CustomLoggerService のモックを作成
    mockLogger = {
      log: vi.fn(),
      error: vi.fn(),
      warn: vi.fn(),
      debug: vi.fn(),
      verbose: vi.fn(),
    };

    // CustomLoggerService の依存関係のモック (もしCustomLoggerService自体をインスタンス化する場合に必要)
    // const mockRequestIdService: MockRequestIdService = { getRequestId: jest.fn().mockReturnValue('test-request-id') };
    // const mockConfig: MockConfig = { ENVIRONMENT: 'test' }; // 必要最低限のモック
    // const mockNotionTransport: MockNotionTransportService = {};
    // const mockDiscordTransport: MockDiscordWebhookTransportService = {};

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [
        {
          provide: CustomLoggerService,
          useValue: mockLogger, // TestController には CustomLoggerService のモックを注入
        },
        // CustomLoggerService 自体をインスタンス化してテストする場合は以下のようにその依存も提供
        // CustomLoggerService,
        // { provide: RequestIdService, useValue: mockRequestIdService },
        // { provide: Config, useValue: mockConfig },
        // { provide: NotionTransportService, useValue: mockNotionTransport },
        // { provide: DiscordWebhookTransportService, useValue: mockDiscordTransport },
      ],
    }).compile();

    controller = module.get<TestController>(TestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // testGet メソッドのテスト例
  describe('testGet', () => {
    it('should call logger.log and return correct data', () => {
      const param = { testString: 'hello' };
      const query = { testNumber: 123 };
      const expectedResult = {
        testString: 'hello',
        testNumber: 123,
      };

      const result = controller.testGet(param, query);

      expect(mockLogger.log).toHaveBeenCalledWith('testGet', {
        ...param,
        ...query,
      });
      expect(result).toEqual(expectedResult);
    });
  });

  // testPost メソッドのテスト例
  describe('testPost', () => {
    it('should call logger.log and return correct data', () => {
      const body = { testString: 'world', testAddress: '123 Main St' };
      const expectedResult = {
        testString: 'world',
        testAddress: '123 Main St',
      };

      const result = controller.testPost(body);

      expect(mockLogger.log).toHaveBeenCalledWith('testPost', { ...body });
      expect(result).toEqual(expectedResult);
    });
  });
});
