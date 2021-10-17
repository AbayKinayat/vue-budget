import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  state() {
    return {
      user: null,
      loading: false,
      error: null,
    }
  },
  getters: {
    user: (state) => state.user,
    checkUser: (state) => state.user !== null,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  mutations: {
    setUser(state, user) {
      return state.user = user;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async registration({ commit }, { email, password }) {
      const auth = getAuth();
      try {
        commit("setLoading", true);
        commit("setError", null);

        const user = await createUserWithEmailAndPassword(auth, email, password);

        commit("setUser", user.user.uid);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
      }
    },
    async signIn({ commit, }, { email, password }) {
      const auth = getAuth();
      try {
        commit("setLoading", true);
        commit("setError", null);

        const user = await signInWithEmailAndPassword(auth, email, password);

        commit("setLoading", false);
        commit("setUser", user.user.uid);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
      }
    },
    async signOut() {
      const auth = getAuth();
      return signOut(auth);
    },
    userLogged({ commit }, payload) {
      commit("setUser", payload);
      console.log("User logged: ", payload);
    },
  }
}