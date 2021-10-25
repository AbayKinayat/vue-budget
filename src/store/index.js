import { createStore } from 'vuex'
import transactions from './transactions';
import user from './user';
import snackbar from './snackbar';
import budget from './budget';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    transactions,
    user,
    snackbar,
    budget,
  }
})
