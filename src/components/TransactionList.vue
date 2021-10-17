<template>
  <ul>
    <li
      class="transaction__container"
      v-for="transaction of transactions"
      :key="transaction.id"
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
        :class="{ expense: transaction.expense, income: !transaction.expense }"
      >
        {{ transaction.expense ? "+ " : "- " }} {{ transaction.cash }}
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "TransactionList",
  setup() {
    const store = useStore();

    const transactions = store.getters.transactions;

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
  box-shadow: 0px 4px 4px #231C43;

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

.expense {
  color: $success-color;
}

.income {
  color: $danger-color;
}
</style>