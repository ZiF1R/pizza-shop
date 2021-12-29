<template>
  <div class="item__pizza">
    <img :src="imgPath" />
    <div class="pizza__info">
      <span class="info__name">{{ pizza.name }}</span>
      <span class="info__options">
        {{ options.dough.value }} тесто, {{ options.size.value }} см.
      </span>
    </div>
    <div class="pizza__total-count">
      <div class="total-count__increase">-</div>
      <span>{{ item.totalCount }}</span>
      <div class="total-count__decrease">+</div>
    </div>
    <div class="pizza__total-cost">{{ totalCost }} ₽</div>
    <div class="pizza__remove">
      <img src="@/assets/cart/close.svg" alt="remove" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      pizza: this.item.pizza,
      options: { ...this.item.selectedOptions },
      imgPath: require(`@/assets/pizza/${this.item.pizza.icon}.svg`),
    };
  },

  methods: {
    ...mapGetters(["getCart"]),
  },

  computed: {
    totalCost() {
      return ~~(
        (this.pizza.initialCost * this.options.size.coeff +
          this.options.dough.addition) *
        this.item.totalCount
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.item__pizza {
  display: flex;
  flex-direction: row;

  & > img {
    width: 80px;
    height: 80px;
  }
}

.pizza__info {
  display: flex;
  flex-direction: column;
}
</style>
