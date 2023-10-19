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

  expect(merged).toMatchSnapshot();
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
      languages: ["javascript"],
    },
    {
      accounts: {
        github: "aliozclk",
        twitter: "aliozclk99",
      },
      languages: ["typescript", "vue"],
    }
  );

  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "aliozclk",
        "twitter": "aliozclk99",
      },
      "languages": [
        "javascript",
        "typescript",
        "vue",
      ],
      "name": "Ali",
    }
  `);
});

test("throws error when merging arrays with objects", () => {
  expect(() => deepMerge(["foo", "bar"], { foo: "bar" })).toThrowError(
    "Can not merge two differnet types"
  );
});
