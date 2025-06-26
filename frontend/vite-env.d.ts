/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: number;
  readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
