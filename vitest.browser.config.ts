import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    global: "window",
    "process.env": JSON.stringify(process.env),
  },
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [{ browser: "chromium" }],
    },
    setupFiles: "./src/setupTests.ts",
  },
});
