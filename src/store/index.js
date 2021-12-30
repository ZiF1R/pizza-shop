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
    },
    removeItem(state, item) {
      state.cart = state.cart.filter((el) => el != item);
    },
    clearCart(state) {
      state.cart = [];
    },
    decreaseItem(state, item) {
      state.cart = state.cart.map((el) => {
        if (el === item) el.totalCount--;
        return el;
      });
    },
    increaseItem(state, item) {
      state.cart = state.cart.map((el) => {
        if (el === item) el.totalCount++;
        return el;
      });
    },
  },
  actions: {},
  getters: {
    getCart({ cart }) {
      return cart;
    },
    getTotalCount({ cart }) {
      return cart?.reduce((acc, item) => acc + item.totalCount, 0) || 0;
    },
    getTotalCost({ cart }) {
      let calcCost = (pizza, options) =>
        pizza.initialCost * options.size.coeff + options.dough.addition;
      return (
        ~~cart?.reduce(
          (acc, item) =>
            acc + calcCost(item.pizza, item.selectedOptions) * item.totalCount,
          0
        ) || 0
      );
    },
  },
});
