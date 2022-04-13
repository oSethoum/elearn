import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../server/dist/public",
  },
  server: {
    proxy: {
      "/api": "http://localhost:3001/",
      "/graphql": "http://localhost:3001/",
    },
  },
});
