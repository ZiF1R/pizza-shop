<template>
  <div class="cart">
    <img src="@/assets/logo.svg" alt="pizza-shop logo" />
    <button-component :classes="['button_active', 'button_primary']">
      <span class="total-price">$530</span>
      <span class="line">|</span>
      <div class="cart-icon">
        <img src="@/assets/cart.svg" alt="cart icon" />
        <span class="total-items">3</span>
      </div>
    </button-component>
  </div>
</template>

<script>
import ButtonComponent from "@/components/cart/ButtonComponent.vue";

export default {
  components: {
    ButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 40px;

  .line {
    user-select: none;
    color: #ffffff54;
    padding: 0 9px;
  }
}
</style>
