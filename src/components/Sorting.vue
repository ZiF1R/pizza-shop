<template>
  <div class="sorting">
    <img src="@/assets/sorting/up-arrow.svg" alt="up arrow" />
    <span>Сортировка по:</span>
    <select class="options">
      <option value="popularity">популярности</option>
      <option value="cost">цене</option>
      <option value="alphabet">алфавиту</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    sorting: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.sorting {
  display: flex;
  flex-direction: row;
  height: fit-content;

  select {
    margin-left: 5px;
    padding-bottom: 2px;
    color: var(#{--primary-color});
    font-size: 1em;
    border: none;
    outline: none;
    border-bottom: 1px dashed var(#{--primary-color});
    cursor: pointer;

    &:active {
      border: none;
    }
  }

  span {
    font-weight: 700;
  }

  img {
    padding-right: 5px;
  }
}
</style>
