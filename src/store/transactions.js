import { getDatabase, set, ref, push, child, onValue, update } from "firebase/database";


export default {
  state: {
    transactions: [],
    transactionsLoading: false,
  },

  getters: {
    transactions: (state) => state.transactions,
    transactionsLoading: (state) => state.transactionsLoading,
  },

  mutations: {
    setTransactions(state, payload) {
      state.transactions = payload;
    },
    setTransactionsLoading(state, payload) {
      state.transactionsLoading = payload;
    }
  },

  actions: {
    getTransactions({ commit }) {
      const db = getDatabase();
      commit("setTransactionsLoading", true);

      const transactionRef = ref(db, "transactions");

      onValue(transactionRef, (snapshot) => {
        const transactions = snapshot.val();
        commit("setTransactions", transactions);
        commit("setTransactionsLoading", false);
      });
    },
    async addTransaction({ commit }, payload) {
      const db = getDatabase();
      commit("setTransactionsLoading", true);

      const transactionKey = push(child(ref(db), "transactions")).key;

      await set(ref(db, "transactions/" + transactionKey), payload)
      commit("setTransactionsLoading", false);
    },
    async updateTransaction({ commit }, { transaction, transactionId }) {
      const db = getDatabase();
      const transactionRef = ref(db, "transactions/" + transactionId);
      commit("setTransactionsLoading", true);

      await update(transactionRef, transaction)

      commit("setTransactionsLoading", false);
    }
  }
}