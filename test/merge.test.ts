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
      twitter: "aliozclk99",
    }
  );

  expect(merged).toEqual({
    name: "Ali",
    github: "aliozclk",
    twitter: "aliozclk99",
  });
});

test("shallow merge with arrays", () => {
  const merged = deepMerge(["vue", "react"], ["svelte", "angular"]);

  expect(merged).toEqual(["vue", "react", "svelte", "angular"]);
});

test("deep merge with overlaps", () => {
  const merged = deepMerge(
    {
      name: "Ali",
      accounts: {
        github: "unknown",
      },
    },
    {
      accounts: {
        github: "aliozclk",
        twitter: "aliozclk99",
      },
    }
  );

  expect(merged).toEqual({
    name: "Ali",
    accounts: {
      github: "aliozclk",
      twitter: "aliozclk99",
    },
  });
});
