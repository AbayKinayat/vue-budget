<template>
  <div>
    <h1 class="section-title">Транзакции</h1>
  </div>
  <div class="flex justify-between">
    <div class="transactions_left">
      <FilterBox />
      <TransactionList />
    </div>
    <div class="transactions_right">
      <TransactionsChart />
    </div>
  </div>
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
import TransactionsChart from "@/components/TransactionsChart";
export default {
  name: "Transaction",
  components: {
    FilterBox,
    TransactionList,
    TransactionsChart,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.transactions_left {
  width: 40%;
}
.transactions_right {
  width: 60%;
  padding-left: 40px;
}
</style>