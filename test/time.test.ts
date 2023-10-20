import { test, expect, vi } from "vitest";

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5);
}

test("time", () => {
  vi.setSystemTime(new Date("2020-01-01 18:00:00"));
  expect(getCurrentTime()).toBe("18:00");

  vi.useRealTimers();
});
