<template>
  <div>
    <h1 class="section-title">Транзакции</h1>
  </div>
  <FilterBox />
</template>

<script>
import FilterBox from "@/components/FilterBox";
export default {
  name: "Transaction",
  components: {
    FilterBox,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

</style>