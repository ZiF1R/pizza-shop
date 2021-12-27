<template>
  <div class="sorting">
    <img src="@/assets/sorting/up-arrow.svg" alt="up arrow" />
    <span>Сортировка по:</span>
    <custom-select @onSelect="$emit('onSort', $event.fn)" :options="options" />
  </div>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue";

export default {
  components: {
    CustomSelect,
  },

  emits: ["onSort"],

  data() {
    return {
      options: [
        {
          value: "популярности",
          fn: (a, b) => b["ordersCount"] - a["ordersCount"],
        },
        {
          value: "цене",
          fn: (a, b) => a["initialCost"] - b["initialCost"],
        },
        {
          value: "алфавиту",
          fn: (a, b) => (a["name"] > b["name"] ? 1 : -1),
        },
      ],
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
