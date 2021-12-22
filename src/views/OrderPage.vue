<template>
  <div class="container">
    <head-component />
    <hr />
    <div class="management">
      <filters-component :filters="filters" />
      <sorting-component />
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import FiltersComponent from "@/components/Filters.vue";
import SortingComponent from "@/components/Sorting.vue";

export default {
  name: "OrderPage",

  components: {
    HeadComponent,
    FiltersComponent,
    SortingComponent,
  },

  data() {
    return {
      filters: [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px 70px 0px 40px;

  hr {
    margin: 40px 0;
  }
}
</style>
