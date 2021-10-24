<template>
  <PageLoading v-show="loading" />
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
          :transactions="visibleTransactions"
          :showEditBtn="showEditBtn"
          :showDeleteBtn="showDeleteBtn"
          @editTransactionOpenModal="editTransactionOpenModal"
          @deleteTransaction="deleteTransaction"
        />
        <custom-pagination
          v-if="transactions && transactions.length"
          @updatePage="updatePage"
          :transactions="transactions"
          :currentPage="currentPage"
          :pageSize="pageSize"
        ></custom-pagination>
      </div>
      <div class="transactions_right">
        <TransactionsChart :transactions="visibleTransactions" />
        <ExchangeRates />
      </div>
    </div>
    <EditTransactionModal
      v-if="editTransactionIsOpen"
      @closeModal="editTransactionCloseModal"
      @updateVisibleTransaction="updateVisibleTransaction"
      :isOpen="editTransactionIsOpen"
      :transactionId="transactionId"
    />
  </div>
</template>

<script>
import FilterBox from "@/components/FilterBox";
import TransactionList from "@/components/TransactionList";
import TransactionsChart from "@/components/TransactionsChart";
import ExchangeRates from "@/components/ExchangeRates";
import PageLoading from "@/components/PageLoading";
import EditTransactionModal from "@/components/EditTransactionModal";
import CustomPagination from "@/components/CustomPagination";
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
    CustomPagination,
  },
  setup() {
    const store = useStore();
    const showEditBtn = ref(false);
    const showDeleteBtn = ref(false);
    const editTransactionIsOpen = ref(false);
    const transactionId = ref("");
    const pageLoading = ref(true);

    const currentPage = ref(0);
    const pageSize = ref(5);
    const visibleTransactions = ref([]);
    store.dispatch("getTransactions");

    const transactions = computed(() => store.getters.transactions);

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
      updateVisibleTransaction();
    };

    const updatePage = (pageNumber) => {
      currentPage.value = pageNumber;
      updateVisibleTransaction();
    };

    const updateVisibleTransaction = () => {
      visibleTransactions.value = transactions.value.slice(
        currentPage.value * pageSize.value,
        currentPage.value * pageSize.value + pageSize.value
      );

      // if we 0 visible transactions, go back a page

      if (visibleTransactions.value.length == 0 && currentPage.value > 0) {
        updatePage(currentPage.value - 1);
      }
    };

    onMounted(() => {
      setTimeout(() => {
        pageLoading.value = false;
      }, 10);
      updateVisibleTransaction();
    });

    console.log("Transactions: ", transactions);
    console.log("Current Page: ", currentPage);
    console.log("Page Size: ", pageSize);

    return {
      loading,
      showEditBtn,
      showDeleteBtn,
      editTransactionIsOpen,
      transactionId,
      pageLoading,
      currentPage,
      pageSize,
      visibleTransactions,
      transactions,
      updatePage,
      showEditBtnHandler,
      showDeleteBtnHandler,
      editTransactionCloseModal,
      editTransactionOpenModal,
      deleteTransaction,
      updateVisibleTransaction,
    };
  },
  watch: {
    "$store.state.transactions.transactions"() {
      this.updateVisibleTransaction();
    },
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
  animation: page-in 0.5s;
}
.page-leave-active {
  animation: page-in 0.5s reverse;
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