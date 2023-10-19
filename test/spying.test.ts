import { test, expect, vi } from "vitest";
import { greeting } from "../src/spying";

test("greeting", () => {
  const spy = vi.spyOn(console, "log");

  greeting("Ali");
  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith("Hello, Ali");

  spy.mockReset();
  greeting("World");

  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith("Hello, World");

  expect(spy).toMatchInlineSnapshot(`
    [MockFunction log] {
      "calls": [
        [
          "Hello, World",
        ],
      ],
      "results": [
        {
          "type": "return",
          "value": undefined,
        },
      ],
    }
  `);
});
