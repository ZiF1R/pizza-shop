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
      <img
        @click.left="decreaseItem(item)"
        src="@/assets/cart/decrease.svg"
        alt="decrease"
      />
      <span>{{ item.totalCount }}</span>
      <img
        @click.left="increaseItem(item)"
        src="@/assets/cart/increase.svg"
        alt="increase"
      />
    </div>
    <div class="pizza__total-cost">{{ totalCost }} ₽</div>
    <div @click.left="removeItem(item)" class="pizza__remove">
      <img src="@/assets/cart/close.svg" alt="remove" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

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
    ...mapMutations(["decreaseItem", "increaseItem", "removeItem"]),
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
  position: relative;
  justify-content: space-between;
  width: 100%;

  & > img {
    width: 80px;
    height: 80px;
    padding-right: 15px;
  }
}

.pizza__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  .info__options {
    color: #8d8d8d;
    font-size: 0.9em;
  }
}

.info__name,
.pizza__total-count,
.pizza__total-cost {
  font-weight: 800;
  font-size: 1.2em;
}

.pizza__total-count {
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0 12px;
  }

  img {
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 1;
    }
  }
}

.pizza__total-cost {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px;
}

.pizza__remove {
  display: flex;
  flex-direction: row;
  align-self: center;

  height: min-content;
  padding: 8px;

  border-radius: 50%;
  border: 2px solid #d7d7d7;
  user-select: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
}
</style>
