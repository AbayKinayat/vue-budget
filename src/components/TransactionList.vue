<template>
  <ul>
    <li
      class="transaction__container"
      v-for="transaction in transactions"
      :key="transaction.title"
    >
      <div>
        <h4 class="transaction__title">
          {{ transaction.title }}
        </h4>
        <small class="transaction__date">
          {{ transaction.date }}
        </small>
      </div>
      <div
        class="transaction__cash"
        :class="{ income: transaction.income, expense: !transaction.income }"
      >
        {{ transaction.income ? "+ " : "- " }} {{ transaction.cash }}
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "TransactionList",
  setup() {
    const store = useStore();

    const transactions = computed(() => store.getters.transactions);

    return {
      transactions,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.transaction__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $primary-color;
  box-shadow: 0px 4px 4px #231c43;

  margin-bottom: 20px;
  border-radius: 12px;
  padding: 15px 20px;
}

.transaction__title {
  font-weight: 500;
  font-size: 18px;
}

.transaction__date {
  font-weight: 500;
  font-size: 12px;

  color: $small-color;
}

.income {
  color: $success-color;
}

.expense {
  color: $danger-color;
}
</style>