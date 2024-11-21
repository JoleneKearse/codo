import { defineConfig } from "vite";  

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./vitest.setup.js",
  }
})