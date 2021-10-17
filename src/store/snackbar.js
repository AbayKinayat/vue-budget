export default {
  state() {
    return {
      snackbarText: "",
      snackbarType: "",
      snackbarIsOpen: false,
    }
  },

  getters: {
    snackbarText: (state) => state.snackbarText,
    snackbarType: (state) => state.snackbarType,
    snackbarIsOpen: (state) => state.snackbarIsOpen,
  },

  mutations: {
    setSnackbarText(state, payload) {
      state.snackbarText = payload;
    },
    setSnackbarType(state, payload) {
      state.snackbarType = payload;
    },
    setSnackbarIsOpen(state, payload) {
      state.snackbarIsOpen = payload;
    },
  },

  actions: {
    setSnackbar({ commit }, { isOpen, type, text }) {
      commit("setSnackbarText", text);
      commit("setSnackbarType", type);
      commit("setSnackbarIsOpen", isOpen);
    }
  }
}