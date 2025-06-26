import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    //   injectRegister: "auto",
    //   manifest: {
    //     name: "Unyte",
    //     short_name: "Unyte",
    //     description: "Unyte",
    //     theme_color: "#ff1493",
    //     background_color: "#ff7f50",
    //     display: "standalone",
    //     scope: "/",
    //     start_url: ".",
    //     icons: [
    //       {
    //         src: "icon-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //       {
    //         src: "icon-256x256.png",
    //         sizes: "256x256",
    //         type: "image/png",
    //       },
    //       {
    //         src: "icon-384x384.png",
    //         sizes: "384x384",
    //         type: "image/png",
    //       },
    //       {
    //         src: "icon-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //     orientation: "portrait-primary",
    //   },
    //   workbox: {
    //     maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
    //     globPatterns: [
    //       "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff2}",
    //     ],
    //     navigationPreload: true,
    //     runtimeCaching: [
    //       {
    //         urlPattern: new RegExp("/tasks/.*"),
    //         handler: "NetworkFirst",
    //         options: {
    //           cacheName: "tasks-cache",
    //           networkTimeoutSeconds: 2,
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //           expiration: {
    //             maxEntries: 300,
    //             maxAgeSeconds: 60 * 60 * 24, // 1 day
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: new RegExp("/proposals/.*"),
    //         handler: "NetworkFirst",
    //         options: {
    //           cacheName: "proposals-cache",
    //           networkTimeoutSeconds: 2,
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //           expiration: {
    //             maxEntries: 300,
    //             maxAgeSeconds: 60 * 60 * 24, // 1 day
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: new RegExp("/*"),
    //         handler: "StaleWhileRevalidate",
    //         options: {
    //           cacheName: "all-cache",
    //           expiration: {
    //             maxEntries: 1000,
    //             maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //           backgroundSync: {
    //             name: "apiSyncCache",
    //             options: {
    //               maxRetentionTime: 1, // 1分以内に再試行
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
