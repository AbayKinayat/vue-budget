<template>
  <div
    v-show="isOpen"
    class="modal-background"
    @click="$emit('closeModal')"
  ></div>
  <div class="modal" :class="{ active: isOpen }">
    <div class="modal__header">
      <div class="modal__title">Добавить транзакцию</div>
      <p class="modal__subtitle">Заполните форму что бы добавить транзацию</p>
    </div>
    <div class="tab-container">
      <div
        @click="incomeHandler(true)"
        :class="{ active: transaction.income }"
        class="tab-item"
      >
        Добавить доход
      </div>
      <div
        @click="incomeHandler(false)"
        :class="{ active: !transaction.income }"
        class="tab-item"
      >
        Добавить расход
      </div>
    </div>
    <div class="modal__body">
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
import { getAuth } from "firebase/auth";
import { reactive, computed } from "vue";
import { useStore } from "vuex";
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
    const store = useStore();
    const transaction = reactive({
      title: "",
      cash: "",
      date: "",
      income: true,
    });

    const cashLabel = computed(() =>
      transaction.income
        ? "Введите количество заработанных денег"
        : "Введите количество потраченных денег"
    );

    const incomeHandler = (condition) => {
      transaction.income = condition;
    };

    const submit = async () => {
      const auth = getAuth();
      // Submit validation
      var validated = true;
      for (let key in transaction) {
        if (key !== "income" && !transaction[key]) {
          validated = false;
        }
      }
      // if validated add Transaction
      if (validated) {
        await store.dispatch("addTransaction", {
          ...transaction,
          user_uid: auth.currentUser.uid,
        });
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "success",
          text: transaction.income
            ? "Вы успешно добавили доходную транзакцию"
            : "Вы успешно добавили расходную транзакцию",
        });
        for (let key in transaction) {
          transaction[key] = "";
        }
        transaction.income = true;
        emit("closeModal");
      } else {
        store.dispatch("setSnackbar", {
          isOpen: true,
          type: "warning",
          text: "Заполните форму для того что бы добавить транзакцию",
        });
      }
    };

    return {
      transaction,
      submit,
      incomeHandler,
      cashLabel,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  opacity: 0;
  transition: 0.4s ease;
  visibility: hidden;
  z-index: $modal-z-index;

  max-width: 680px;
  width: 100%;
  background-color: $primary-color;

  overflow: hidden;
  border-radius: 48px;

  &.active {
    transform: translate(-50%, -50%);
    visibility: visible;
    opacity: 1;
  }
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $modal-background-z-index;
  max-width: 100vw;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.modal__header {
  background-color: $icon-color;
  padding: 24px 57px 18px 57px;
}

.modal__title {
  font-weight: 600;
  font-size: 20px;

  margin-bottom: 5px;
}

.modal__subtitle {
  font-weight: 600;
  font-size: 14px;

  color: #b1a4eb;
}

.modal__body {
  padding: 30px 57px 40px 57px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    color: $small-color-light;

    margin-bottom: 7px;
  }

  input {
    font-size: 16px;
    background-color: $icon-color;
    color: #fff;

    border: 2px solid $purple-border-color;
    border-radius: 6px;
    padding: 15px 16px;

    &:hover {
      filter: brightness(1.1);
    }

    &:focus {
      filter: brightness(1.1);
      outline: none;
    }
  }
}

.form-group.circle {
  input {
    border-radius: 25px;
  }
}

.tab-container {
  display: flex;
}

.tab-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 45px;
  font-weight: 500;
  font-size: 18px;
  transition: 0.2s ease;
  cursor: pointer;

  border: 1px solid $active-color;

  &:hover {
    background-color: $active-color;
  }

  &.active {
    background-color: $active-color;
  }
}

.modal-btn {
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  transition: 0.2s ease;

  background-color: transparent;
  border: 1px solid $active-color;
  border-radius: 4px;
  padding: 8px 27px;

  &:hover {
    outline: none;
    background-color: $active-color;
  }
}
</style>