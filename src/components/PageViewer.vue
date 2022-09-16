<template>
  <div class="page">
    Page viewer here
    <div v-for="element of elements" :key="element.id">
      <p>
        {{ element.type }}
        <br />
        {{ element.content }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BACKEND_SERVER } from "@/config.js";

console.log(BACKEND_SERVER);

export default {
  name: "PageViewer",
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
    /*
      Load the page and its elements from the backend
    */
    let response = await axios.get(`${BACKEND_SERVER}/pages/${this.pageId}`);
    const elementIds = response.data.elements;

    for (const id of elementIds) {
      response = await axios.get(`${BACKEND_SERVER}/elements/${id}`);
      this.elements.push(response.data);
    }
  },
};
</script>
