import { getDatabase, set, ref, push, child, query, orderByChild, update, remove, equalTo, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";


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
      const auth = getAuth();
      const user = auth.currentUser;
      const db = getDatabase();
      commit("setTransactionsLoading", true);

      const transactions = query(ref(db, "transactions"), orderByChild("user_uid"), equalTo(user.uid))

      onValue(transactions, (snapshot) => {
        if (snapshot.val()) {
          const value = Object.values(snapshot.val()); // snapshot.val() is Object. I want transform object on array
          commit("setTransactions", value);
          commit("setTransactionsLoading", false);
        } else {
          commit("setTransactions", []); // if snapshot.val() is null transactions equal to empty array
          commit("setTransactionsLoading", false);
        }
      });
    },
    async addTransaction({ commit }, payload) {
      const db = getDatabase();
      commit("setTransactionsLoading", true);

      const transactionKey = push(child(ref(db), "transactions")).key; // generate uid for new transaction

      await set(ref(db, "transactions/" + transactionKey), { uid: transactionKey, ...payload }) // Add transaction with uid
      commit("setTransactionsLoading", false);
    },
    async updateTransaction({ commit }, { transaction, transactionId }) {
      const db = getDatabase();
      const transactionRef = ref(db, "transactions/" + transactionId);
      commit("setTransactionsLoading", true);

      await update(transactionRef, transaction)

      commit("setTransactionsLoading", false);
    },
    async deleteTransaction({ commit }, transactionId) {
      const db = getDatabase();
      const transactionRef = ref(db, "transactions/" + transactionId);
      commit("setTransactionsLoading", true);

      await remove(transactionRef);
      commit("setTransactionsLoading", false);
    }
  }
}