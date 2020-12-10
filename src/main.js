import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueCurrencyInput from "vue-currency-input";

Vue.config.productionTip = false;
Vue.use(VueCurrencyInput);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
