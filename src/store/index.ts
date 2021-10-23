import Vue from "vue";
import Vuex from "vuex";

import { stateModule as RoleStateModule } from "@app/store/modules/role-list";

Vue.use(Vuex);

export const store = new Vuex.Store({});

store.registerModule(RoleStateModule.id, RoleStateModule.module);

export default store;
