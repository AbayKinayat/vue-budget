<template>
  <PageLoading v-show="loading" />
  <template v-if="!loading">
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
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
import TransactionsChart from "@/components/TransactionsChart";
import ExchangeRates from "@/components/ExchangeRates";
import PageLoading from "@/components/PageLoading";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Transaction",
  components: {
    FilterBox,
    TransactionList,
    TransactionsChart,
    ExchangeRates,
    PageLoading,
  },
  setup() {
    const store = useStore();

    store.dispatch("getTransactions");
    const loading = computed(() => store.getters.transactionsLoading);

    return { loading };
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