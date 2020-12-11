import api from "@/api/api";

export default {
  namespaced: true,
  state: {
    goods: [],
    tempGoods: [
      {"id":"34hBL2KZXGg0z9lwL6mb1u","title":"Phone","description":"This is a phone. (obviously)","price":200.0,"picture":"//images.ctfassets.net/xxp17kv8z1ln/1yAivltE1ekHLh2U8n0ZXp/1886255dfc01115bb40c67d7c8c3fb97/csh-d6ianyrf-meml.png"},
      {"id":"5jsMW2JXBd7hJ73aHgOQ5Y","title":"Table","description":"A ugly table. \n","price":10.0,"picture":"//images.ctfassets.net/xxp17kv8z1ln/2kewkFzePPlrqm4SZG4Hj9/b6a02b519d6a4f0ee8f64763c9610295/table.jpg"},
      {"id":"1E7EFn8TeMkk4la37J76Sm","title":"Chair","description":"This is the chair we need","price":5.0,"picture":"//images.ctfassets.net/xxp17kv8z1ln/1CApkoTfxlrTU9s4TJ4vJR/ec74bfcf1c9ad2d5c63e91e6fa381f31/wooden-chair-500x500.jpg"}
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
