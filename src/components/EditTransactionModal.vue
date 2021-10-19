<template>
  <div
    v-show="isOpen"
    class="modal-background"
    @click="$emit('closeModal')"
  ></div>
  <div class="modal" :class="{ active: isOpen }">
    <div class="modal__header">
      <div class="modal__title">Изменить транзакцию</div>
      <p class="modal__subtitle">Заполните форму что бы изменить транзакцию</p>
    </div>
    <div class="tab-container">
      <div
        @click="incomeHandler(true)"
        :class="{ active: transaction.income }"
        class="tab-item"
      >
        Доходный
      </div>
      <div
        @click="incomeHandler(false)"
        :class="{ active: !transaction.income }"
        class="tab-item"
      >
        Расходный
      </div>
    </div>
    <div v-if="transaction" class="modal__body">
      <form @submit.prevent="submit" ref="form">
        <div class="form-group">
          <label for="title">Введите данные</label>
          <input v-model="transaction.title" id="title" type="text" />
        </div>
        <div class="form-group">
          <label for="cash">{{ cashLabel }}</label>
          <input v-model="transaction.cash" id="cash" type="text" />
        </div>
        <div class="form-group">
          <label for="date">Выберите дату</label>
          <input v-model="transaction.date" id="date" type="date" />
        </div>
        <div class="flex">
          <div class="flex-1"></div>
          <button class="modal-btn ml-auto">готово</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";
import { ref as vueref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "EditTransactionModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  emits: ["closeModal"],
  setup(props, { emit }) {
    const db = getDatabase();
    const store = useStore();
    const transactionRef = ref(db, "transactions/" + props.transactionId);
    let transaction = vueref(null);

    onValue(transactionRef, (snapshot) => {
      transaction.value = snapshot.val();
    });

    const cashLabel = computed(() =>
      transaction.value.income
        ? "Введите количество заработанных денег"
        : "Введите количество потраченных денег"
    );

    const submit = async () => {
      let validated = true;
      for (let key in transaction.value) {
        if (key !== "income" && !transaction.value[key]) {
          validated = false;
        }
      }
      if (validated) {
        await store.dispatch("updateTransaction", {
          transaction: transaction.value,
          transactionId: props.transactionId,
        });
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "success",
          text: "Вы успешно изменили транзакцию",
        });
        emit("closeModal");
      }
    };

    const incomeHandler = (condition) => {
      transaction.value.income = condition;
      console.log(transaction.value.income);
    };

    return { transaction, cashLabel, submit, incomeHandler };
  },
};
</script>
