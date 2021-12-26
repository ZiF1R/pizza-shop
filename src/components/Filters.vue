<template>
  <div class="filters">
    <button
      class="button filter"
      v-for="filter in filters"
      :key="filter"
      :class="{ filter_active: filter === activeFilter }"
      @click="selectFiltration(filter)"
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

  emits: ["onFilter"],

  data() {
    return {
      activeFilter: this.filters[0],
    };
  },

  methods: {
    selectFiltration(filter) {
      this.activeFilter = filter;
      this.$emit("onFilter", this.activeFilter);
    },
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
