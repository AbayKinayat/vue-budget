export default {
  state: {
    transactions: [
      {
        id: 1,
        title: "Хлеб",
        date: new Date(),
        expense: false,
        cash: "115",
      },
      {
        id: 2,
        title: "Зарплата",
        date: new Date(),
        expense: true,
        cash: "100000",
      },
    ],
  },

  getters: {
    transactions: (state) => state.transactions,
  },

  mutations: {

  },

  actions: {

  }
}