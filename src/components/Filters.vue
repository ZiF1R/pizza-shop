<template>
  <div class="filters">
    <button
      class="button filter"
      v-for="filter in filters"
      :key="filter"
      :class="{ filter_active: filter === active }"
      @click="active = filter"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      active: "Все",
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  border-color: #fff;

  &:hover {
    filter: opacity(0.8);
  }

  &:active {
    filter: grayscale(0.7);
  }
}

.filter_active {
  background: #000;
  color: #fff;
}
</style>
