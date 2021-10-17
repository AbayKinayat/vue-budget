import { createStore } from 'vuex'
import transactions from './transactions';
import user from './user';
import snackbar from './snackbar';

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
  }
})
