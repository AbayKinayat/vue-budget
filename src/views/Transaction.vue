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
      <ExchangeRates />
    </div>
  </div>
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
import TransactionsChart from "@/components/TransactionsChart";
import ExchangeRates from "@/components/ExchangeRates";
import { getAuth } from "firebase/auth";

export default {
  name: "Transaction",
  components: {
    FilterBox,
    TransactionList,
    TransactionsChart,
    ExchangeRates,
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log("user: ", user);
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