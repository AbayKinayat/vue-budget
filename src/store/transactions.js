export default {
  state: {
    transactions: [
      {
        id: 1,
        title: "Хлеб",
        date: "07/20",
        expense: false,
        cash: "115",
      },
      {
        id: 2,
        title: "Долг",
        date: "07/21",
        expense: true,
        cash: "2000",
      },
      {
        id: 3,
        title: "Пицца кола",
        date: "07/25",
        expense: false,
        cash: "1500",
      },
      {
        id: 4,
        title: "Такси",
        date: "08/03",
        expense: false,
        cash: "2000",
      },
      {
        id: 5,
        title: "Диван",
        date: "08/13",
        expense: false,
        cash: "20000",
      },
      {
        id: 6,
        title: "Зарплата",
        date: "08/16",
        expense: true,
        cash: "10000",
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