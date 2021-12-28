<template>
  <div class="pizza">
    <img :src="imgPath" :alt="pizza.name" />
    <h2>{{ pizza.name }}</h2>
    <div class="pizza__options">
      <div class="options__dough">
        <template v-for="d in pizza.dough" :key="d.value">
          <span
            class="option"
            :class="{
              option_disable: !d.inStock,
              option_active: d === activeDough,
            }"
            @click="d.inStock && (activeDough = d)"
          >
            {{ d.value }}
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
            @click="size.inStock && (activeSize = size)"
          >
            {{ size.value }} см.
          </span>
        </template>
      </div>
    </div>
    <div class="pizza__footer">
      <span class="pizza__total-price">от {{ totalCost }} ₽</span>
      <primary-button
        class="add-button"
        @click="addToCart"
        :classes="['button_primary']"
      >
        <span class="total-price">+ Добавить</span>
        <span v-if="count" class="total-count">{{ count }}</span>
      </primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";
import { mapMutations } from "vuex";

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
      activeDough: this.pizza.dough.filter((d) => d.inStock)[0],
      activeSize: this.pizza.sizes.filter((s) => s.inStock)[0],
      imgPath: require(`@/assets/pizza/${this.pizza.icon}.svg`),
      count: 0,
    };
  },

  methods: {
    ...mapMutations(["pushToCart"]),
    addToCart() {
      this.count++;
      this.pushToCart({
        pizza: this.pizza,
        selectedOptions: {
          dough: this.activeDough,
          size: this.activeSize,
        },
      });
    },
  },

  computed: {
    totalCost() {
      return ~~(
        this.pizza.initialCost * this.activeSize.coeff +
        this.activeDough.addition
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

.add-button {
  &:hover .total-count {
    color: var(#{--primary-color});
    background: #fff;
  }
}

.total-count {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  color: #fff;
  background: var(#{--primary-color});
}

.option_active {
  background: #fff;
}

.option_disable {
  opacity: 0.2;
  cursor: initial;
}

.pizza__options {
  font-weight: 700;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 7px;

  .options__dough,
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
