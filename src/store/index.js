import Vue from "vue";
import Vuex from "vuex";
import Content from "@/store/modules/content";
import Goods from "@/store/modules/goods";


Vue.use(Vuex);

const modules = { Content, Goods };

const store = new Vuex.Store({
  modules
});

export default store;
