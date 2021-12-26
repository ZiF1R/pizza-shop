<template>
  <div class="pizza">
    <img :src="imgPath" :alt="pizza.name" />
    <h2>{{ pizza.name }}</h2>
    <div class="pizza__options">
      <div class="options__border">
        <template v-for="border in pizza.borders" :key="border.value">
          <span
            class="option"
            :class="{
              option_disable: !border.inStock,
              option_active: border === activeBorder,
            }"
            @click="activeBorder = border"
          >
            {{ border.value }}
          </span>
        </template>
      </div>
      <div class="options__sizes">
        <template v-for="size in pizza.sizes" :key="size.value">
          <span
            class="option"
            :class="{
              option_disable: !size.inStock,
              option_active: size === activeSize,
            }"
            @click="activeSize = size"
          >
            {{ size.value }} см.
          </span>
        </template>
      </div>
    </div>
    <div class="pizza__footer">
      <span class="pizza__total-price">от {{ totalCost }} ₽</span>
      <primary-button :classes="['button_primary']">
        <span class="total-price">+ Добавить</span>
      </primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  props: {
    pizza: {
      type: Object,
      requred: true,
    },
  },

  components: {
    PrimaryButton,
  },

  data() {
    return {
      activeBorder: this.pizza.borders.filter((b) => b.inStock)[0],
      activeSize: this.pizza.sizes.filter((s) => s.inStock)[0],
      imgPath: require(`@/assets/pizza/${this.pizza.icon}.svg`),
    };
  },

  computed: {
    totalCost() {
      return ~~(
        this.pizza.initialCost * this.activeSize.coeff +
        this.activeBorder.addition
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.pizza {
  width: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  // margin-right: 60px;

  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 1.3em;
    padding: 11px 0 22px;
    margin: 0;
  }

  img {
    align-self: center;
  }
}

.option {
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  user-select: none;
}

.option_active {
  background: #fff;
}

.option_disable {
  opacity: 0.2;
}

.pizza__options {
  font-weight: 700;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 7px;

  .options__border,
  .options__sizes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .options__sizes {
    margin-top: 8px;

    .option {
      padding: 10px 15px;
    }
  }
}

.pizza__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  .pizza__total-price {
    font-weight: 900;
    font-size: 1.3em;
  }
}
</style>
