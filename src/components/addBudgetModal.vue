<template>
  <div
    v-show="isOpen"
    class="modal-background"
    @click="$emit('closeModal')"
  ></div>
  <div class="modal" :class="{ active: isOpen }">
    <div class="modal__header">
      <div class="modal__title">Добавить бюджет</div>
      <p class="modal__subtitle">Заполните форму что бы добавить бюджет</p>
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
          <input v-model="budget.current_cash" id="current_cash" type="text"/>
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
import { reactive } from "vue";
import { useStore } from "vuex";
import { getAuth } from "firebase/auth";
export default {
  name: "addTransactionModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
  setup(props, { emit }) {
    const auth = getAuth();
    const store = useStore();
    const budget = reactive({
      goal_title: "",
      goal_cash: "",
      current_cash: "",
    });

    const submit = async () => {
      // Submit validation
      var validated = true;
      for (let key in budget) {
        if (!budget[key]) {
          validated = false;
        }
      }
      // if validated add Transaction
      if (validated) {
        await store.dispatch("addBudget", {
          ...budget,
          user_uid: auth.currentUser.uid,
        });
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "success",
          text: "Вы успешно добавили бюджет",
        });
        for (let key in budget) {
          budget[key] = "";
        }
        emit("closeModal");
      } else {
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "warning",
          text: "Заполните форму для того что бы добавить бюджет",
        });
      }
    };

    return {
      budget,
      submit,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
</style>