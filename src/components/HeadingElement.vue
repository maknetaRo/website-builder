<template>
  <div class="heading-element" :data-id="id">
    <h1 class="text-4xl" :data-id="id">
      {{ content }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "HeadingElement",
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
