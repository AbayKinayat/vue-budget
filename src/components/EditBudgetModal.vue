<template>
  <div
    v-show="isOpen"
    class="modal-background"
    @click="$emit('closeModal')"
  ></div>
  <div v-if="!loading" class="modal" :class="{ active: isOpen }">
    <div class="modal__header">
      <div class="modal__title">Изменить бюджет</div>
      <p class="modal__subtitle">Заполните форму что бы изменить бюджет</p>
    </div>
    <div class="modal__body">
      <form @submit.prevent="submit" ref="form">
        <div class="form-group">
          <label for="goal_title">Название цели</label>
          <input v-model="budget.goal_title" id="goal_title" type="text" />
        </div>
        <div class="form-group">
          <label for="goal_cash">Счет цели</label>
          <input v-model="budget.goal_cash" id="goal_cash" type="text" />
        </div>
        <div class="form-group">
          <label for="current_cash">Текущий счет</label>
          <input v-model="budget.current_cash" id="current_cash" type="text" />
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
import { useStore } from "vuex";
import { getDatabase, ref, onValue } from "firebase/database";
import { ref as vueref } from "vue";

export default {
  name: "editBudgetModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    budgetId: {
      type: String || Number,
      required: true,
    },
  },
  emits: ["closeModal"],
  setup(props, { emit }) {
    const db = getDatabase();
    const store = useStore();
    const loading = vueref(true);

    const budgetRef = ref(db, "budgets/" + props.budgetId);
    let budget = vueref(null);

    onValue(budgetRef, (snapshot) => {
      budget.value = snapshot.val();
      loading.value = false;
    });

    const submit = async () => {
      // Submit validation
      var validated = true;
      for (let key in budget.value) {
        if (!budget.value[key]) {
          validated = false;
        }
      }
      // if validated add Transaction
      if (validated) {
        await store.dispatch("updateBudget", {
          budget: budget.value,
          budgetId: props.budgetId,
        });
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "success",
          text: "Вы успешно изменили бюджет",
        });
        emit("closeModal");
      } else {
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "warning",
          text: "Заполните форму для того что бы изменить бюджет",
        });
      }
    };

    return {
      budget,
      loading,
      submit,
    };
  },
};
</script>
