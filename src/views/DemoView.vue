<template>
  <page-viewer :page-id="123" />
</template>

<script>
import PageViewer from "@/components/PageViewer.vue";

export default {
  name: "DemoView",
  components: {
    PageViewer,
  },
};
</script>
