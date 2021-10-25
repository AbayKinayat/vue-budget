import { getDatabase, ref, child, push, query, equalTo, orderByChild, onValue, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export default {
  state() {
    return {
      budgets: [],
      budgetLoading: false,
    }
  },

  getters: {
    budgets: (state) => state.budgets,
    budgetLoading: (state) => state.budgetLoading,
  },

  mutations: {
    setBudgets(state, payload) {
      state.budgets = payload
    },
    setBudgetLoading(state, payload) {
      state.budgetLoading = payload
    },
  },

  actions: {
    async getBudgets({ commit }) {
      commit("setBudgetLoading", true);
      const db = getDatabase();
      const auth = getAuth();
      const user = auth.currentUser;
      const budgetRef = query(ref(db, "budgets"), orderByChild("user_uid"), equalTo(user.uid)); // Get user budgets by user_uid

      onValue(budgetRef, (snapshot) => {
        if (snapshot.val()) {
          const budgets = Object.values(snapshot.val());
          commit("setBudgets", budgets);
        } else {
          commit("setBudgets", []);
        }
        commit("setBudgetLoading", false);
      })
    },
    async addBudget({ commit }, payload) {
      commit("setBudgetLoading", true);
      const db = getDatabase();
      const budgetKey = push(child(ref(db), "budgets")).key; // New budget uid

      await set(ref(db, "budgets/" + budgetKey), { uid: budgetKey, ...payload }); // Add budget with uid
      commit("setBudgetLoading", false);
    },
  }
}