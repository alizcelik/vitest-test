import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Example from "../../src/components/Example.vue";

test("import Vue SFC", () => {
  expect(Example).toBeDefined();

  const wrapper = mount(Example);

  expect(wrapper.text()).toBe("Hello !");
});

test("component with props", () => {
  const wrapper = mount(Example, {
    props: {
      name: "Vitest",
    },
  });

  expect(wrapper.text()).toBe("Hello Vitest!");
});
