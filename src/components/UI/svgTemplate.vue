<script>
export default {
  name: "SvgSprite",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    hrefName() {
      return `#${this.name}`;
    },
  },
};
</script>

<template>
  <svg class="svg-icon">
    <use :xlink:href="hrefName" width="100%" height="100%" />
  </svg>
</template>

<style>
.svg-icon {
  fill: currentColor;
  stroke: currentColor;
}
</style>
