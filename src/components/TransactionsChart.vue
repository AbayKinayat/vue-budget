<template>
  <div class="transaction__card">
    <BarChart :chartData="testData" :options="options" />
  </div>
</template>

<script>
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";

Chart.register(...registerables);
Chart.defaults.color = "#7C70B2";
Chart.defaults.borderColor = "#7C70B2";

export default {
  name: "TransactionsChart",
  components: {
    BarChart,
  },
  setup() {
    const store = useStore();

    const transactions = computed(() => store.getters.transactions);
    const transactionsIncomeCash = computed(() => {
      let allIncome = [];
      for (let key in transactions.value) {
        let date = transactions.value[key].date;
        let cash = transactions.value[key].cash;
        if (transactions.value[key].income) {
          allIncome.push({ x: date, y: cash });
        }
      }

      const unique = [...new Set(allIncome.map((a) => a.x))];

      let allIncomeFinal = [];

      unique.map((item) => {
        let allCash = 0;
        let cashDate = "";
        for (let key in transactions.value) {
          let date = transactions.value[key].date;
          let cash = transactions.value[key].cash;
          if (transactions.value[key].income && item === date) {
            cashDate = date;
            allCash += +cash;
          }
        }
        allIncomeFinal.push({ x: cashDate, y: allCash });
      });

      return allIncomeFinal;
    });
    const transactionsExpenseCash = computed(() => {
      let allExpanse = [];
      for (let key in transactions.value) {
        let date = transactions.value[key].date;
        let cash = transactions.value[key].cash;
        if (!transactions.value[key].income) {
          allExpanse.push({ x: date, y: cash });
        }
      }

      const unique = [...new Set(allExpanse.map((a) => a.x))];

      let allExpanseFinal = [];

      unique.map((item) => {
        let allCash = 0;
        let cashDate = "";
        for (let key in transactions.value) {
          let date = transactions.value[key].date;
          let cash = transactions.value[key].cash;
          if (!transactions.value[key].income && item === date) {
            cashDate = date;
            allCash -= +cash;
          }
        }
        allExpanseFinal.push({ x: cashDate, y: allCash });
      });

      return allExpanseFinal;
    });
    const transactionsDates = computed(() => {
      const dates = [];
      for (let key in transactions.value) {
        dates.push(transactions.value[key].date);
      }

      const allDates = [...new Set(dates.map((a) => a))];

      return allDates;
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
          label: "Доход",
          data: transactionsIncomeCash.value,
          backgroundColor: "#A0E630",
          stack: "das",
        },
        {
          label: "Расход",
          data: transactionsExpenseCash.value,
          backgroundColor: "#FF7070",
          stack: "das",
        },
      ],
    }));

    return { testData, options };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.transaction__card {
  background-color: $primary-color;
  box-shadow: 0px 4px 4px #231c43;

  margin-bottom: 40px;
  border-radius: 48px;
  padding: 20px;
}
</style>