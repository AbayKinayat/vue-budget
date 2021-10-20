<template>
  <ul>
    <li
      class="transaction__container"
      v-for="(transaction, key) in transactions"
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
      <div
        class="edit-transaction"
        :class="{ active: showEditBtn || showDeleteBtn }"
      >
        <button
          @click="$emit('deleteTransaction', key)"
          class="delete-btn delete"
          :class="{ active: showDeleteBtn }"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4159 1.18099H10.5V0.591588C10.5003 0.513814 10.4854 0.436751 10.4561 0.364841C10.4269 0.292931 10.3839 0.227595 10.3296 0.1726C10.2753 0.117605 10.2108 0.0740386 10.1398 0.044411C10.0688 0.0147833 9.99272 -0.000319273 9.91594 -2.63365e-05H4.08406C4.00728 -0.000319273 3.9312 0.0147833 3.86021 0.044411C3.78922 0.0740386 3.72472 0.117605 3.67042 0.1726C3.61613 0.227595 3.57312 0.292931 3.54387 0.364841C3.51462 0.436751 3.49971 0.513814 3.5 0.591588V1.18099H0.584063C0.42916 1.18099 0.280601 1.24332 0.171068 1.35427C0.061535 1.46521 0 1.61569 0 1.7726C0 1.92951 0.061535 2.07999 0.171068 2.19093C0.280601 2.30188 0.42916 2.36421 0.584063 2.36421H1.75V11.2273C1.75 11.6975 1.93437 12.1484 2.26256 12.4808C2.59075 12.8132 3.03587 13 3.5 13H10.5C10.9641 13 11.4092 12.8132 11.7374 12.4808C12.0656 12.1484 12.25 11.6975 12.25 11.2273V2.36421H13.4159C13.5708 2.36421 13.7194 2.30188 13.8289 2.19093C13.9385 2.07999 14 1.92951 14 1.7726C14 1.61569 13.9385 1.46521 13.8289 1.35427C13.7194 1.24332 13.5708 1.18099 13.4159 1.18099ZM11.0841 11.2273C11.0835 11.3839 11.0217 11.5338 10.9122 11.6442C10.8028 11.7547 10.6545 11.8167 10.5 11.8167H3.5C3.34548 11.8167 3.19725 11.7547 3.08778 11.6442C2.97831 11.5338 2.91652 11.3839 2.91594 11.2273V2.36421H11.0841V11.2273Z"
              fill="white"
            />
            <path
              d="M5.25002 10.0441C5.40454 10.0441 5.55277 9.98211 5.66224 9.87164C5.77171 9.76117 5.8335 9.61126 5.83408 9.45474V4.72626C5.83408 4.56935 5.77255 4.41887 5.66301 4.30792C5.55348 4.19697 5.40492 4.13464 5.25002 4.13464C5.09511 4.13464 4.94656 4.19697 4.83702 4.30792C4.72749 4.41887 4.66595 4.56935 4.66595 4.72626V9.45474C4.66653 9.61126 4.72832 9.76117 4.83779 9.87164C4.94726 9.98211 5.09549 10.0441 5.25002 10.0441Z"
              fill="white"
            />
            <path
              d="M8.74996 10.0441C8.90448 10.0441 9.05271 9.98211 9.16218 9.87164C9.27165 9.76117 9.33344 9.61126 9.33402 9.45474V4.72626C9.33402 4.56935 9.27248 4.41887 9.16295 4.30792C9.05342 4.19697 8.90486 4.13464 8.74996 4.13464C8.59505 4.13464 8.44649 4.19697 8.33696 4.30792C8.22743 4.41887 8.16589 4.56935 8.16589 4.72626V9.45474C8.16647 9.61126 8.22826 9.76117 8.33773 9.87164C8.4472 9.98211 8.59543 10.0441 8.74996 10.0441Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          @click="$emit('editTransactionOpenModal', key)"
          class="edit-btn filter-edit-btn edit"
          :class="{ active: showEditBtn }"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 9.1625V12.5C12.5 12.8315 12.3683 13.1495 12.1339 13.3839C11.8995 13.6183 11.5815 13.75 11.25 13.75H2.5C2.16848 13.75 1.85054 13.6183 1.61612 13.3839C1.3817 13.1495 1.25 12.8315 1.25 12.5V3.75C1.25 3.41848 1.3817 3.10054 1.61612 2.86612C1.85054 2.6317 2.16848 2.5 2.5 2.5H5.8375"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 1.25L13.75 3.75L7.5 10H5V7.5L11.25 1.25Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "TransactionList",
  emits: ["editTransactionOpenModal", "deleteTransaction"],
  props: {
    showEditBtn: {
      type: Boolean,
      required: true,
    },
    showDeleteBtn: {
      type: Boolean,
      required: true,
    },
  },
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
  flex-wrap: wrap;
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

.edit-transaction {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 100%;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: 0.4s ease-in-out;

  .delete {
    margin-right: 10px;
  }

  button {
    visibility: hidden;
    opacity: 0;
    transition: 1s cubic-bezier(0, 2, 1, 0.955);
    transform: scale(0.5);

    &.active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }

  &.active {
    visibility: visible;
    opacity: 1;
    height: 35px;
  }
}

.income {
  color: $success-color;
}

.expense {
  color: $danger-color;
}
</style>