import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environmentMatchGlobs: ["**/domTest/**"],
  },
});
