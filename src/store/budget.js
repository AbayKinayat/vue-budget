import { getDatabase, ref, child, push, query, equalTo, orderByChild, onValue, set, update, remove } from "firebase/database";
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
    activeBudgets: (state) => state.budgets.filter(budget => +budget.current_cash < +budget.goal_cash),
    doneBudgets: (state) => state.budgets.filter(budget => +budget.current_cash >= +budget.goal_cash),
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
    async updateBudget({ commit }, { budget, budgetId }) {
      const db = getDatabase();
      const bedgetRef = ref(db, "budgets/" + budgetId);
      commit("setBudgetLoading", true);

      await update(bedgetRef, budget)

      commit("setBudgetLoading", false);
    },
    async deleteBudget({ commit }, budgetId) {
      const db = getDatabase();
      const budgetRef = ref(db, "budgets/" + budgetId);
      commit("setTransactionsLoading", true);

      await remove(budgetRef);
      commit("setTransactionsLoading", false);
    }
  }
}