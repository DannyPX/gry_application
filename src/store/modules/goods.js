import api from "@/api/api";
import * as countries from "i18n-iso-countries";

export default {
  namespaced: true,
  state: {
    goods: [],
    tempGoods: [
      {
        id: "34hBL2KZXGg0z9lwL6mb1u",
        title: "Study books",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, lectus integer at urna a, dui dolor eu.",
        price: 20,
        picture: "https://i.postimg.cc/3Jp0fwxD/books.png"
      },
      {
        id: "5jsMW2JXBd7hJ73aHgOQ5Y",
        title: "Calculator",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, lectus integer at urna a, dui dolor eu.",
        price: 7,
        picture: "https://i.postimg.cc/R0PWJ6X2/calculator.png"
      },
      {
        id: "1E7EFn8TeMkk4la37J76Sm",
        title: "Pens",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, lectus integer at urna a, dui dolor eu.",
        price: 1,
        picture: "https://i.postimg.cc/nc8CmtGV/pens.png"
      }
    ],
    selectedProduct: {}
  },
  mutations: {
    SET_GOODS(state, data) {
      state.goods = data;
    },
    SET_SELECTED_PRODUCT(state, data) {
      let index = state.tempGoods.findIndex(x => x.title == data);
      state.selectedProduct = state.tempGoods[index];
      localStorage.setItem("product", data);
      sessionStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.tempGoods[index])
      );
    },
    LOAD_SELECTED_PRODUCT(state, dispatch) {
      if (!sessionStorage.getItem("selectedProduct")) {
        const product = localStorage.getItem("product");
        dispatch(`setSelectedProduct(${product})`);
      } else {
        state.selectedProduct = JSON.parse(
          sessionStorage.getItem("selectedProduct")
        );
      }
    },
    RESET_SELECTED_PRODUCT(state) {
      state.selectedProduct = null;
    }
  },
  actions: {
    loadGoods({ commit }) {
      api.get("/goods/money").then(res => {
        if (res.status === 200) {
          commit("SET_GOODS", res.data);
        }
      });
    },
    setSelectedProduct({ commit }, title) {
      commit("SET_SELECTED_PRODUCT", title);
    },
    loadSelectedProduct({ commit }) {
      commit("LOAD_SELECTED_PRODUCT");
    },
    resetSelectedProduct({ commit }) {
      commit("RESET_SELECTED_PRODUCT");
    },
    pushDonate(context, data) {
      countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
      let body = {
        countryName: countries.getName(data.countryCode, "en", {
          select: "official"
        }),
        money: data.value.toFixed(2)
      };
      console.log(body);
      // api.post("/donation/money", body, {
      //   headers: { "Content-Type": "application/json" }
      // })
    }
  },
  getters: {
    goods: state => {
      return state.goods;
    },
    temp: state => {
      return state.tempGoods;
    },
    selectedProduct: state => {
      return state.selectedProduct;
    }
  }
};
