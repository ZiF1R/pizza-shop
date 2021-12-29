<template>
  <head-component />
  <div v-if="getTotalCount() === 0" class="empty-cart">
    <h1>Корзина пустая 😕</h1>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="@/assets/cart/empty-cart.svg" />
    <router-link class="return" to="/">
      <primary-button
        :classes="['button_secondary', 'button_secondary_active']"
      >
        Вернуться назад
      </primary-button>
    </router-link>
  </div>
  <div v-else class="cart-orders">
    <div class="cart-orders__header">
      <div class="header__title">
        <img src="@/assets/cart/cart.svg" />
        <span>Корзина</span>
      </div>
      <div class="header__clear-cart">
        <img src="@/assets/cart/trash.svg" />
        <span>Очистить корзину</span>
      </div>
    </div>
    <div
      class="cart-orders__item"
      v-for="(item, index) in getCart()"
      :key="index"
    >
      <hr />
      <ordered-pizza :item="item" />
    </div>
    <div class="cart-orders__total"></div>
    <div class="cart-orders__buttons"></div>
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import OrderedPizza from "@/components/Cart/OrderedPizza.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    HeadComponent,
    PrimaryButton,
    OrderedPizza,
  },

  methods: {
    ...mapGetters(["getCart", "getTotalCount"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-orders,
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #333;
}

.empty-cart {
  text-align: center;

  h1 {
    margin: 0 0 10px;
  }

  p {
    color: #777777;
    margin: 0 0 45px;
  }

  .return {
    margin-top: 60px;
    text-decoration: none;
  }
}

.cart-orders__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  .header__title,
  .header__clear-cart {
    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
  }

  .header__title {
    span {
      font-size: 1.8em;
      font-weight: 900;
      line-height: 1em;
    }
  }

  .header__clear-cart {
    cursor: pointer;

    span {
      color: #b6b6b6;
    }
  }
}
</style>
