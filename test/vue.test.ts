import { expect, test } from "vitest";
import Example from "../src/components/Example.vue";

test("import Vue SFC", () => {
  expect(Example).toBeDefined();
});
