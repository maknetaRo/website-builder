<template>
  <h1>
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
