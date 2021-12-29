<template>
  <head-component>
    <router-link class="cart__link" to="/cart">
      <primary-button :classes="['button_active', 'button_primary']">
        <span class="total-price">{{ getTotalCost() }} ₽</span>
        <span class="line">|</span>
        <div class="cart-icon">
          <img src="@/assets/cart.svg" alt="cart icon" />
          <span class="total-items">{{ getTotalCount() }}</span>
        </div>
      </primary-button>
    </router-link>
  </head-component>
  <div class="management">
    <filters-component @onFilter="activeFilter = $event" :filters="filters" />
    <sorting-component @onSort="sort" />
  </div>
  <h2>Все пиццы</h2>
  <div class="products" v-if="filteredPizza.length">
    <pizza v-for="p in filteredPizza" :key="p.name" :pizza="p" />
  </div>
  <h1 v-else style="text-align: center; margin-top: 130px">
    По данному фильтру ничего не найдено!
  </h1>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Pizza from "@/components/Pizza.vue";
import FiltersComponent from "@/components/Filters.vue";
import SortingComponent from "@/components/Sorting.vue";
import { pizzaTable } from "@/database-simulation.js";
import { mapGetters } from "vuex";

export default {
  name: "OrderPage",

  components: {
    HeadComponent,
    Pizza,
    PrimaryButton,
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

  created() {
    this.sort((a, b) => b["ordersCount"] - a["ordersCount"]);
  },

  methods: {
    ...mapGetters(["getTotalCount", "getTotalCost"]),
    sort(fn) {
      this.pizza = this.pizza.sort(fn);
    },
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

.cart__link {
  color: #fff;
  text-decoration: none;

  .line {
    user-select: none;
    color: #ffffff54;
    padding: 0 9px;
  }

  .cart-icon {
    display: flex;
    justify-content: center;

    span {
      padding-left: 5px;
    }
  }
}

.products {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
