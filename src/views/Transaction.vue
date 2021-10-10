<template>
  <div>
    <h1 class="section-title">Транзакции</h1>
  </div>
  <FilterBox />
  <TransactionList />
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
export default {
  name: "Transaction",
  components: {
    FilterBox,
    TransactionList,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
</style>