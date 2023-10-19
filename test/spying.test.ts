import { test, expect, vi } from "vitest";
import { greeting } from "../src/spying";

test("greeting", () => {
  const spy = vi.spyOn(console, "log");

  greeting("Ali");

  expect(spy).toBeCalledWith("Hello, Ali");
  expect(spy).toBeCalledTimes(1);
});
