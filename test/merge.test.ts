import { test, expect } from "vitest";
import { deepMerge } from "../src";

test("shallow merge", () => {
  const merged = deepMerge(
    {
      name: "Ali",
    },
    {
      github: "aliozclk",
    }
  );

  expect(merged).toEqual({
    name: "Ali",
    github: "aliozclk",
  });
});

test("shallow merge with overlaps", () => {
  const merged = deepMerge(
    {
      name: "Ali",
      github: "unknown",
    },
    {
      github: "aliozclk",
    }
  );

  expect(merged).toEqual({
    name: "Ali",
    github: "aliozclk",
  });
});

test("shallow merge with arrays", () => {
  const merged = deepMerge(["vue", "react"], ["svelte", "angular"]);

  expect(merged).toEqual(["vue", "react", "svelte", "angular"]);
});
