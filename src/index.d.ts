import { VueRouter } from "vue-router/types/router";
import Notify from "vue-notifyjs";

declare module "vue/types/vue/" {
  interface Vue {
    $router: VueRouter;
    $notify: Notify;
  }
}
