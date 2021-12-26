<template>
  <div class="container">
    <head-component />
    <hr />
    <div class="management">
      <filters-component @onFilter="activeFilter = $event" :filters="filters" />
      <sorting-component />
    </div>
    <h2>Все пиццы</h2>
    <div class="products" v-if="filteredPizza.length">
      <pizza v-for="p in filteredPizza" :key="p.name" :pizza="p" />
    </div>
    <h1 v-else style="text-align: center; margin-top: 130px">
      По данному фильтру ничего не найдено!
    </h1>
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import Pizza from "@/components/Pizza.vue";
import { pizzaTable } from "@/database-simulation.js";
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
      pizza: pizzaTable,
      activeFilter: "Все",
      filters: [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Сырные",
        "Острые",
        "Закрытые",
      ],
    };
  },

  computed: {
    filteredPizza() {
      if (this.activeFilter === "Все") return this.pizza;
      else
        return this.pizza.filter((p) => p.keyWords.includes(this.activeFilter));
    },
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
    border: none;
    height: 1px;
    background: #eee;
    margin: 40px 0;
  }

  .products {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
