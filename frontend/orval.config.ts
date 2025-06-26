import { defineConfig } from "orval";
import { loadEnv } from "vite";

// .env ファイルを読み込む
const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

export default defineConfig({
  petstore: {
    input: {
      target: "../backend/openapi.yaml",
    },
    output: {
      target: "./src/api/",
      mode: "tags-split",
      client: "swr",
      baseUrl: env.VITE_BACKEND_URL,
    },
  },
  petstoreZod: {
    input: {
      target: "../backend/openapi.yaml",
    },
    output: {
      target: "./src/api/",
      mode: "tags-split",
      client: "zod",
      fileExtension: ".zod.ts",
    },
  },
});
