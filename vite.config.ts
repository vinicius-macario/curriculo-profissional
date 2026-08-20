import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "./" : "/",
  plugins: [react()],
  root: fileURLToPath(new URL("./client", import.meta.url)),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./client/src", import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: fileURLToPath(new URL("./dist/public", import.meta.url)),
  },
});
