import { shallowMount, flushPromises } from "@vue/test-utils";
import PageViewer from "@/components/PageViewer.vue";

describe("PageViewer", () => {
  jest.setTimeout(10000);

  it("calls the backend to load data corresponding to the page id", async () => {
    const expected = [
      {
        content: "This is a heading",
        id: 10,
        level: 1,
        type: "heading",
      },
      {
        content: "This is a text box",
        id: 20,
        type: "text",
      },
      {
        content: "This is another text box",
        id: 30,
        type: "text",
      },
    ];

    const wrapper = shallowMount(PageViewer, {
      props: { pageId: 123 },
    });
    await wrapper.vm.loaded();
    expect(wrapper.vm.elements).toEqual(expected);
  });
});
