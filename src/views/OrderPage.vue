<template>
  <div class="container">
    <head-component />
    <hr />
    <filters-component />
  </div>
</template>

<script>
import HeadComponent from "@/components/Header.vue";
import FiltersComponent from "@/components/Filters.vue";

export default {
  name: "OrderPage",

  components: {
    HeadComponent,
    FiltersComponent,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px 70px 0px 40px;

  hr {
    margin: 40px 0;
  }
}
</style>
