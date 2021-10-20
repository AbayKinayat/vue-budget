<template>
  <PageLoading v-show="loading" />
  <transition
    enter-active-class="page-enter-active"
    leave-active-class=".page-enter-leave"
  >
    <div v-if="!loading && !pageLoading">
      <div>
        <h1 class="section-title">Транзакции</h1>
      </div>
      <div class="flex justify-between">
        <div class="transactions_left">
          <FilterBox
            @showEditBtnHandler="showEditBtnHandler"
            @showDeleteBtnHandler="showDeleteBtnHandler"
          />
          <TransactionList
            :showEditBtn="showEditBtn"
            :showDeleteBtn="showDeleteBtn"
            @editTransactionOpenModal="editTransactionOpenModal"
            @deleteTransaction="deleteTransaction"
          />
        </div>
        <div class="transactions_right">
          <TransactionsChart />
          <ExchangeRates />
        </div>
      </div>
      <EditTransactionModal
        v-if="editTransactionIsOpen"
        @closeModal="editTransactionCloseModal"
        :isOpen="editTransactionIsOpen"
        :transactionId="transactionId"
      />
    </div>
  </transition>
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
import TransactionsChart from "@/components/TransactionsChart";
import ExchangeRates from "@/components/ExchangeRates";
import PageLoading from "@/components/PageLoading";
import EditTransactionModal from "@/components/EditTransactionModal";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Transaction",
  components: {
    FilterBox,
    TransactionList,
    TransactionsChart,
    ExchangeRates,
    PageLoading,
    EditTransactionModal,
  },
  setup() {
    const store = useStore();
    const showEditBtn = ref(false);
    const showDeleteBtn = ref(false);
    const editTransactionIsOpen = ref(false);
    const transactionId = ref("");
    const pageLoading = ref(true);

    store.dispatch("getTransactions");
    const loading = computed(() => store.getters.transactionsLoading);

    const editTransactionCloseModal = () => {
      editTransactionIsOpen.value = false;
    };
    const editTransactionOpenModal = (id) => {
      editTransactionIsOpen.value = true;
      transactionId.value = id;
    };

    const showEditBtnHandler = () => {
      showEditBtn.value = !showEditBtn.value;
    };

    const showDeleteBtnHandler = () => {
      showDeleteBtn.value = !showDeleteBtn.value;
    };

    const deleteTransaction = async (transactionId) => {
      await store.dispatch("deleteTransaction", transactionId);
      await store.dispatch("setSnackbar", {
        isOpen: true,
        type: "success",
        text: "Вы успешно удалили транзакцию",
      });
    };

    onMounted(() => {
      setTimeout(() => {
        pageLoading.value = false;
      }, 10);
    });

    return {
      loading,
      showEditBtn,
      showDeleteBtn,
      editTransactionIsOpen,
      transactionId,
      pageLoading,
      showEditBtnHandler,
      showDeleteBtnHandler,
      editTransactionCloseModal,
      editTransactionOpenModal,
      deleteTransaction,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.transactions_left {
  width: 40%;
}
.transactions_right {
  width: 60%;
  padding-left: 40px;
}

.page-enter-active {
  animation: page-in .5s;
}
.page-leave-active {
  animation: page-in .5s reverse;
}
@keyframes page-in {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>