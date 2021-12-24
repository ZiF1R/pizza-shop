<template>
  <div class="sorting">
    <img src="@/assets/sorting/up-arrow.svg" alt="up arrow" />
    <span>Сортировка по:</span>
    <custom-select :options="options" />
  </div>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue";

export default {
  components: {
    CustomSelect,
  },

  data() {
    return {
      options: ["популярности", "цене", "алфавиту"],
    };
  },
};
</script>

<style lang="scss" scoped>
.sorting {
  display: flex;
  flex-direction: row;
  height: fit-content;

  span {
    width: max-content;
    font-weight: 700;
  }

  img {
    padding-right: 5px;
  }
}
</style>
