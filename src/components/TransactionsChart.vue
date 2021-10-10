<template>
  <div class="transaction-chart__card">
    <BarChart :chartData="testData" :options="options" />
  </div>
</template>

<script>
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";

Chart.register(...registerables);
Chart.defaults.color = "#ffffff";

export default {
  name: "TransactionsChart",
  components: {
    BarChart,
  },
  setup() {
    const store = useStore();

    const transactionsExpenseCash = ref([]);
    const transactionsIncomeCash = ref([]);

    const transactionsDates = ref([]);

    const transactions = store.getters.transactions;

    transactions.map((transaction) => {
      let cash = transaction.cash;
      let date = transaction.date;

      if (!transaction.expense) {
        cash = transaction.cash - transaction.cash * 2;
        transactionsIncomeCash.value.push({ x: date, y: cash });
      } else {
        transactionsExpenseCash.value.push({ x: date, y: cash });
      }
      transactionsDates.value.push(date);
    });

    const options = ref({
      responsive: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
          },
        ],
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Доходы и расходы",
        },
      },
    });

    const testData = computed(() => ({
      labels: transactionsDates.value,
      datasets: [
        {
          label: "Расход",
          data: transactionsIncomeCash.value,
          backgroundColor: "#FF7070",
          stack: "das"
        },
        {
          label: "Доход",
          data: transactionsExpenseCash.value,
          backgroundColor: "#A0E630",
          stack: "das"
        },
      ],
    }));

    return { testData, options };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.transaction-chart__card {
  background-color: $primary-color;

  border-radius: 48px;
  padding: 20px;
}
</style>