import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../server/dist/public",
  },

  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },

  server: {
    proxy: {
      "/api": "http://localhost:3001/",
      "/graphql": "http://localhost:3001/",
    },
  },
});
