import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    pushToCart(state, newItem) {
      let isAdded = false;
      state.cart = state.cart.map((item) => {
        if (
          item.pizza === newItem.pizza &&
          item.selectedOptions.dough === newItem.selectedOptions.dough &&
          item.selectedOptions.size === newItem.selectedOptions.size
        ) {
          isAdded = true;
          item.totalCount++;
        }
        return item;
      });
      !isAdded && state.cart.push({ ...newItem, totalCount: 1 });
      console.log(state.cart);
    },
  },
  actions: {},
  getters: {
    getCart({ cart }) {
      return cart;
    },
  },
});
