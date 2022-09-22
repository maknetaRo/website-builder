<template>
  <div class="text-element">
    <div style="margin: 1em 0">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TextElement",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
