<template>
  <PageLoading v-show="loading" />
  <template v-if="!loading">
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
  </template>
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
import TransactionsChart from "@/components/TransactionsChart";
import ExchangeRates from "@/components/ExchangeRates";
import PageLoading from "@/components/PageLoading";
import EditTransactionModal from "@/components/EditTransactionModal";
import { computed, ref } from "vue";
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

    return {
      loading,
      showEditBtn,
      showDeleteBtn,
      editTransactionIsOpen,
      transactionId,
      showEditBtnHandler,
      showDeleteBtnHandler,
      editTransactionCloseModal,
      editTransactionOpenModal,
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
</style>