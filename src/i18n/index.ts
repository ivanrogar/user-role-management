import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import { default as messages } from "@app/i18n/i18n.json";

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
  silentTranslationWarn: true,
});
