<template>
  <div class="text-element" :data-id="id">
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
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>
