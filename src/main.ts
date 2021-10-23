import "@app/styles/app.scss";

require("bootstrap");

import Vue from "vue";
import App from "@app/App.vue";
import router from "@app/router";
import store from "@app/store";
import { i18n } from "@app/i18n";
import Notify from "vue-notifyjs";
import VueSweetalert2 from "vue-sweetalert2";

import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);

Vue.use(Notify);

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
