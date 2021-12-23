<template>
  <button @click="action" class="button" :class="[...classes]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: Array,
      required: false,
      default: () => [],
    },
    action: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  user-select: none;
}
</style>
