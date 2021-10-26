<template>
  <div>
    <h2 class="section-title">Статистика</h2>
    <div class="flex justify-between">
      <div class="transaction__card budget-pie-chart">
        <PieChart
          :chartData="budgetPieChartData"
          :options="budgetPieChartOptions"
        />
      </div>
      <div class="transaction__card budget-pie-chart">
        <PieChart :chartData="transactionPieChartData" :options="transactionPieChartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { PieChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { useStore } from "vuex";
import { computed, ref } from "vue";

Chart.register(...registerables);
Chart.defaults.color = "#7C70B2";
Chart.defaults.borderColor = "#7C70B2";

export default {
  name: "Statistic",
  components: {
    PieChart,
  },
  setup() {
    const store = useStore();
    store.dispatch("getBudgets");
    store.dispatch("getTransactions");
    const budgetPieChartOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Бюджет",
        },
      },
    });

    const transactionPieChartOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Транзакции",
        },
      },
    });

    const activeBudgetsCount = computed(
      () => store.getters.activeBudgets.length
    );
    const doneBudgetsCount = computed(() => store.getters.doneBudgets.length);

    const incomeTransactions = computed(() => {
      let cash = 0;
      store.getters.transactions
        .filter((transaction) => transaction.income)
        .map((transaction) => {
          cash += +transaction.cash;
        });
      return cash;
    });

    const expenseTransactions = computed(() => {
      let cash = 0;
      store.getters.transactions
        .filter((transaction) => !transaction.income)
        .map((transaction) => {
          cash += +transaction.cash;
        });

      return cash;
    });

    console.log(incomeTransactions.value);

    const transactionPieChartData = computed(() => ({
      labels: ["Доход", "Расход"],
      datasets: [
        {
          label: "Dataset 1",
          data: [incomeTransactions.value, expenseTransactions.value],
          backgroundColor: ["#A0E630", "#FF7070"],
        },
      ],
    }));

    const budgetPieChartData = computed(() => ({
      labels: ["Активные", "Завершенные"],
      datasets: [
        {
          label: "Dataset 1",
          data: [activeBudgetsCount.value, doneBudgetsCount.value],
          backgroundColor: ["#37c2ff", "#66CC66"],
        },
      ],
    }));

    return {
      budgetPieChartData,
      budgetPieChartOptions,
      transactionPieChartData,
      transactionPieChartOptions,
    };
  },
};
</script>

<style lang="scss">
.budget-pie-chart {
  max-width: 48%;
  height: 600px;
  width: 100%;

  > div {
    height: 100%;
  }
}
</style>