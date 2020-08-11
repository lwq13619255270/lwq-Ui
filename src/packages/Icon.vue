<template>
  <svg class="q-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script>
import "../styles/icon.js";
export default {
  name: "lwq-icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.q-icon {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>