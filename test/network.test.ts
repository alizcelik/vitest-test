import { test, expect, vi, beforeAll, afterAll } from "vitest";
import { getPostBody } from "../src/network";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/posts/:id", () => {
    const id = http.request.params.id;
    return HttpResponse.json({ body: "Mocked for" + id + "!" });
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("shouuld fetch", async () => {
  const result = await getPostBody(1);

  expect(result).toMatchInlineSnapshot(
    '"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"'
  );
});
