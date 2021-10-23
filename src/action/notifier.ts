import Vue from "vue";
import { i18n } from "@app/i18n";

export class Notifier {
  add(message: string, type = "success", delay = 3000, messageParams?: {}) {
    Vue.prototype.$notify({
      message: i18n.t(message, messageParams),
      type: type,
      timeout: delay,
      horizontalAlign: "center",
      verticalAlign: "bottom",
    });
  }
}
