<template>
  <div class="container">
    <head-component />
    <hr />
    <div class="management">
      <filters-component :filters="filters" />
      <sorting-component />
    </div>
    <h2>Все пиццы</h2>
    <div class="products">
      <pizza />
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import Pizza from "@/components/Pizza.vue";
import FiltersComponent from "@/components/Filters.vue";
import SortingComponent from "@/components/Sorting.vue";

export default {
  name: "OrderPage",

  components: {
    HeadComponent,
    Pizza,
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

  .management {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  h2 {
    padding: 0;
    margin: 35px 0;
    font-weight: 900;
    font-size: 2em;
    color: #000;
  }

  hr {
    margin: 40px 0;
  }
}
</style>
