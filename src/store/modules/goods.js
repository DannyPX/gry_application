import api from "@/api/api";

export default {
  namespaced: true,
  state: {
    goods: []
  },
  mutations: {
    SET_GOODS(state, data) {
      state.goods = data;
    }
  },
  actions: {
    loadGoods({ commit }) {
      api.get("/goods/money").then(res => {
        if(res.status === 200) {
          commit("SET_GOODS", res.data)
        }
      });
    }
  },
  getters: {
    goods: state => {
      return state.goods;
    }
  }
};
