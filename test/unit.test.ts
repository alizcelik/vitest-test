import { test, expect } from "vitest";

test("this is a simple test does not need DOM", () => {
  expect(true).toBe(true);
});

test("make sure DOM is not available", () => {
  expect(typeof document).toBe("undefined");
});
