<template>
  <div class="select" @mouseleave="showOptions = false">
    <span class="selected-value" @mouseenter="showOptions = true">
      {{ selected }}
    </span>
    <div class="options" v-if="showOptions">
      <span
        v-for="option in options"
        :key="option"
        @click.left="selectEvent(option)"
      >
        {{ option }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      selected: this.options[0],
      showOptions: false,
    };
  },

  methods: {
    selectEvent(option) {
      this.selected = option;
      this.showOptions = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  margin-left: 8px;
  position: relative;

  user-select: none;
  z-index: 10;
}

.selected-value {
  padding-bottom: 2px;
  color: var(#{--primary-color});
  font-size: 1em;
  border: none;
  outline: none;
  border-bottom: 1px dashed var(#{--primary-color});
  cursor: pointer;
}

.options {
  display: flex;
  flex-direction: column;
  position: absolute;

  right: 0;
  top: 0;
  transform: translateY(1em);

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  padding: 10px 0;

  span {
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
      background: rgba(254, 95, 30, 0.05);
      color: var(#{--primary-color});
    }
  }
}
</style>
