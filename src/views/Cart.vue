<template>
  <head-component />
  <div class="empty-cart">
    <h1>Корзина пустая 😕</h1>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="@/assets/empty-cart.svg" />
    <router-link class="return" to="/">
      <primary-button
        :classes="['button_secondary', 'button_secondary_active']"
      >
        Вернуться назад
      </primary-button>
    </router-link>
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  components: {
    HeadComponent,
    PrimaryButton,
  },
};
</script>

<style lang="scss" scoped>
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
}

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
</style>
