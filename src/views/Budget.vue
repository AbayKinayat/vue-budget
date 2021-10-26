<template>
  <transition
    enter-active-class="page-enter-active"
    leave-active-class="page-enter-leave"
  >
    <div v-if="!loading">
      <h1 class="section-title">Бюджет</h1>
      <div class="mb-8">
        <h4 class="section-title-two">Активные</h4>
        <ul class="flex">
          <BudgetItem
            :budget="budget"
            v-for="budget of activeBudgets"
            :key="budget.uid"
            @editBudget="editBudgetModalOpen"
          />
          <div @click="addBudgetModalOpen" class="budget__add-card">
            <span>Добавить бюджет</span>
          </div>
        </ul>
      </div>
      <div>
        <h4 class="section-title-two">Завершенные</h4>
        <ul class="flex">
          <BudgetItem
            :budget="budget"
            v-for="budget of doneBudgets"
            :key="budget.uid"
            @editBudget="editBudgetModalOpen"
          />
        </ul>
      </div>
    </div>
  </transition>
  <addBudgetModal
    @closeModal="addBudgetModalClose"
    :isOpen="addBudgetModalIsOpen"
  />
  <EditBudgetModal
    v-if="editBudgetModalIsOpen && budgetId"
    :isOpen="editBudgetModalIsOpen"
    @closeModal="editBudgetModalClose"
    :budgetId="budgetId"
  />
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import BudgetItem from "@/components/BudgetItem";
import addBudgetModal from "@/components/addBudgetModal";
import EditBudgetModal from "@/components/EditBudgetModal";
export default {
  name: "Budget",
  components: {
    BudgetItem,
    addBudgetModal,
    EditBudgetModal,
  },
  setup() {
    const loading = ref(true);
    const store = useStore();
    const addBudgetModalIsOpen = ref(false);
    const editBudgetModalIsOpen = ref(false);
    const budgetId = ref(null);

    //Modal Management
    const addBudgetModalClose = () => {
      addBudgetModalIsOpen.value = false;
    };

    const addBudgetModalOpen = () => {
      addBudgetModalIsOpen.value = true;
    };

    const editBudgetModalOpen = (id) => {
      budgetId.value = id;
      editBudgetModalIsOpen.value = true;
    };

    const editBudgetModalClose = () => {
      budgetId.value = null;
      editBudgetModalIsOpen.value = false;
    };

    // Get budgets
    store.dispatch("getBudgets");

    const activeBudgets = computed(() => store.getters.activeBudgets);
    const doneBudgets = computed(() => store.getters.doneBudgets);

    // loading for transition animation
    onMounted(() => {
      loading.value = false;
    });

    return {
      loading,
      activeBudgets,
      doneBudgets,
      budgetId,
      addBudgetModalIsOpen,
      addBudgetModalClose,
      addBudgetModalOpen,
      editBudgetModalIsOpen,
      editBudgetModalOpen,
      editBudgetModalClose,
    };
  },
};
</script>


<style lang="scss">
@import "@/scss/_variables.scss";

.card {
  max-width: 270px;
  width: 100%;
  background-color: $primary-color;
  border-radius: 22px;
  height: 100%;
  box-shadow: 0px 4px 4px #231c43;

  margin-right: 20px;
}

// .card__image {
//   max-width: 100%;
//   width: 100%;
//   height: 164px;
//   object-fit: cover;
// }

.card__body {
  padding: 15px 20px;
}

.card__body-head {
  position: relative;
}

.card__title {
  font-weight: 600;
  font-size: 16px;
}

.card__subtitle {
  font-weight: 500;
  font-size: 12px;
  color: $small-color;
}

.budget__percent_circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-57%, -64%);
  font-weight: 500;
  font-size: 18px;
}

.budget__add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 270px;
  width: 100%;
  min-height: 200px;
  height: inherit;
  cursor: pointer;
  transition: 0.3s;

  border: 5px solid $active-color;
  border-radius: 22px;

  span {
    transition: 0.3s;
  }

  &:hover {
    span {
      transform: scale(0.9);
    }

    border: 4mm ridge $active-color;
  }
}
</style>