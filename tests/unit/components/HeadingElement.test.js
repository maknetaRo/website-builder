import { mount } from "@vue/test-utils";
import HeadingElement from "@/components/HeadingElement.vue";

describe("HeadingElement", () => {
  function createElement(props) {
    return mount(HeadingElement, {
      props: {
        id: 0,
        content: "default content",
        ...props,
      },
    });
  }

  it("is wrapped in a div with its type class and id", async () => {
    /*
     *  This test should be very similar for every elements.
     *  Can we factor it out?
     */
    const wrapper = createElement({ id: 10 });

    expect(wrapper.vm.$el).toBeInstanceOf(HTMLDivElement);
    expect(wrapper.classes()).toContain("heading-element");
    expect(wrapper.attributes("data-id")).toBe("10");
  });

  it("displays its content (plain text)", async () => {
    const theText = "This is my plain-text content";
    const wrapper = createElement({
      content: theText,
    });

    expect(wrapper.text()).toBe(theText);
  });
});
