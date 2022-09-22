<script>
import axios from "axios";
import { BACKEND_SERVER } from "@/config.js";

import { h } from "vue";
import TextElement from "@/components/TextElement.vue";
import HeadingElement from "@/components/HeadingElement.vue";

// Register all supported elements in the `type` map:
const types = new Map();
types.set("text", TextElement);
types.set("heading", HeadingElement);

export default {
  name: "PageViewer",
  components: {
    TextElement,
  },

  props: {
    pageId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      elements: [],
    };
  },

  async mounted() {
    console.log("MOUNTED");
    /*
      Load the page and its elements from the backend
    */
    let response = await axios.get(`${BACKEND_SERVER}/pages/${this.pageId}`);
    const elementIds = response.data.elements;

    const theElements = [];
    for (const id of elementIds) {
      response = await axios.get(`${BACKEND_SERVER}/elements/${id}`);
      theElements.push(response.data);
    }

    this.elements = theElements;
    console.log("MOUNTED DONE");
  },

  render() {
    console.log("RENDER");
    const content = this.elements.map((item) => {
      // the exact type is obtained from `item.type`;
      // fallback to TextElement if the type is unknown.
      return h(types.get(item.type) || TextElement, {
        content: item.content || "",
      });
    });

    return h("div", content);
  },
};
</script>
