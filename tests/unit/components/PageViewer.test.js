import { shallowMount, flushPromises } from "@vue/test-utils";
import PageViewer from "@/components/PageViewer.vue";

import { BACKEND_PORT, BACKEND_SERVER } from "@/config.js";

/* Launch programmatically json-server (TODO: factor that out to an utility) */
let jsonTestServer;
beforeAll(() => {
  const jsonServer = require("json-server");
  const server = jsonServer.create();
  const router = jsonServer.router("db.json");
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  return new Promise((resolve) => {
    jsonTestServer = server.listen(BACKEND_PORT, () => {
      console.log(`JSON Server is running on port ${BACKEND_PORT}`);
      resolve();
    });
  });
});

afterAll(() => {
  jsonTestServer.close();
});
/* End json-server */

describe("PageViewer", () => {
  it("calls the backend to load data corresponding to the page id", async () => {
    const wrapper = shallowMount(PageViewer, {
      props: { pageId: 123 },
    });
    await flushPromises();
    expect(wrapper.vm.elements).toEqual([]);
  });
});
