<template>
  <head-component />
  <div v-if="getTotalCount() === 0" class="empty-cart">
    <h1>Корзина пустая 😕</h1>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="@/assets/cart/empty-cart.svg" />
    <router-link class="router-link" to="/">
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
      <div @click.left="clearCart" class="header__clear-cart">
        <img src="@/assets/cart/trash.svg" />
        <span>Очистить корзину</span>
      </div>
    </div>
    <div
      v-for="item in getCart()"
      :key="item.pizza.id"
      class="cart-orders__item"
    >
      <template v-if="item.totalCount > 0">
        <hr />
        <ordered-pizza :item="item" />
      </template>
    </div>
    <div class="cart-orders__total">
      <div class="total__count">
        Всего пицц: <span>{{ getTotalCount() }} шт.</span>
      </div>
      <div class="total__cost">
        Сумма заказа: <span>{{ getTotalCost() }} ₽</span>
      </div>
    </div>
    <div class="cart-orders__buttons">
      <router-link class="router-link" to="/">
        <primary-button :classes="['button_disabled']">
          ← Вернуться назад
        </primary-button>
      </router-link>
      <primary-button :classes="['button_primary', 'button_active']">
        Оплатить сейчас
      </primary-button>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import OrderedPizza from "@/components/Cart/OrderedPizza.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    HeadComponent,
    PrimaryButton,
    OrderedPizza,
  },

  methods: {
    ...mapMutations(["clearCart"]),
    ...mapGetters(["getCart", "getTotalCount", "getTotalCost"]),
  },
};
</script>

<style lang="scss" scoped>
$block-width: 820px;

.empty-cart {
  text-align: center;

  h1 {
    margin: 0 0 10px;
  }

  p {
    color: #777777;
    margin: 0 0 45px;
  }

  .router-link {
    margin-top: 60px;
  }
}

.cart-orders,
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #333;
}

.router-link {
  text-decoration: none;
}

.cart-orders {
  position: relative;
  justify-content: center;
}

.cart-orders__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: min($block-width, 100%);

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
      font-weight: 800;
      line-height: 1em;
      margin-left: 17px;
    }
  }

  .header__clear-cart {
    cursor: pointer;

    span {
      color: #b6b6b6;
      margin-left: 5px;
    }

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 1;
    }
  }
}

.cart-orders__item {
  position: relative;
  width: min($block-width, 100%);

  hr {
    margin: 30px 0;
  }
}

.cart-orders__total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: min($block-width, 100%);

  font-size: 1.2em;
  margin: 40px 0;

  .total__count span,
  .total__cost span {
    font-weight: 800;
  }

  .total__cost span {
    color: var(#{--primary-color});
  }
}

.cart-orders__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: min($block-width, 100%);
  margin-bottom: 80px;
}
</style>
