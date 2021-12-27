<template>
  <div class="cart">
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="pizza-shop logo" />
    </router-link>
    <slot></slot>
  </div>
  <hr />
</template>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 40px;
}

hr {
  border: none;
  height: 1px;
  background: #eee;
  margin: 40px 0;
}
</style>
