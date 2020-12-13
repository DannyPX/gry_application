import api from "@/api/api";

export default {
  namespaced: true,
  state: {
    goods: [],
    tempGoods: [
      {
        id: "34hBL2KZXGg0z9lwL6mb1u",
        title: "Study books",
        description: "This is a phone. (obviously)",
        price: 200.0,
        picture: "https://i.postimg.cc/3Jp0fwxD/books.png"
      },
      {
        id: "5jsMW2JXBd7hJ73aHgOQ5Y",
        title: "Calculator",
        description: "An ugly table. \n",
        price: 10.0,
        picture: "https://i.postimg.cc/R0PWJ6X2/calculator.png"
      },
      {
        id: "1E7EFn8TeMkk4la37J76Sm",
        title: "Pens",
        description: "This is the chair we need",
        price: 5.0,
        picture: "https://i.postimg.cc/nc8CmtGV/pens.png"
      }
    ]
  },
  mutations: {
    SET_GOODS(state, data) {
      state.goods = data;
    }
  },
  actions: {
    loadGoods({ commit }) {
      api.get("/goods/money").then(res => {
        if (res.status === 200) {
          commit("SET_GOODS", res.data);
        }
      });
    }
  },
  getters: {
    goods: state => {
      return state.goods;
    },
    temp: state => {
      return state.tempGoods;
    }
  }
};
