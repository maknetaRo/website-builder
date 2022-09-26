<template>
  <h1 class="text-4xl">
    {{ content }}
  </h1>
</template>

<script>
export default {
  name: "HeadingElement",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
