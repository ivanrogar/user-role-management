import { RoleStatusEnum } from "@app/enums/role.status.enum";
import { StateModuleInterface } from "@app/contract/state.module.interface";
import { StoresEnum } from "@app/enums/stores.enum";
import { UserRoleInterface } from "@app/contract/data/user.role.interface";

export const stateModule: StateModuleInterface = {
  id: StoresEnum.ROLE_LIST,
  module: {
    namespaced: true,
    state: {
      searchText: "",
      statusFilter: RoleStatusEnum.ACTIVE_AND_INACTIVE,
      roles: [],
    },
    getters: {
      searchText(state) {
        return state.searchText;
      },
      statusFilter(state) {
        return state.statusFilter;
      },
      roles(state) {
        return state.roles;
      },
    },
    actions: {
      setSearchText: {
        async handler(namespacedContext, searchText) {
          namespacedContext.commit("updateSearchText", searchText);
        },
      },
      setStatusFilter: {
        async handler(namespacedContext, newStatusFilter) {
          namespacedContext.commit("updateStatusFilter", newStatusFilter);
        },
      },
      setRoles: {
        async handler(namespacedContext, roles) {
          namespacedContext.commit("updateRoles", roles);
        },
      },
      addRole: {
        async handler(namespacedContext, role) {
          namespacedContext.commit("appendRole", role);
        },
      },
      updateRole: {
        async handler(namespacedContext, role) {
          namespacedContext.commit("replaceRole", role);
        },
      },
      removeRole: {
        async handler(namespacedContext, roleId) {
          namespacedContext.commit("deleteRole", roleId);
        },
      },
    },
    mutations: {
      updateSearchText(state, searchText) {
        state.searchText = searchText;
      },
      updateStatusFilter(state, newStatusFilter) {
        state.statusFilter = newStatusFilter;
      },
      updateRoles(state, roles) {
        state.roles = roles;
      },
      appendRole(state, role) {
        state.roles.push(role);
      },
      replaceRole(state, role) {
        const index = state.roles.findIndex((roleItem: UserRoleInterface) => {
          return roleItem.id === role.id;
        });

        if (index >= 0) {
          state.roles.splice(index, 1, role);
        }
      },
      deleteRole(state, roleId) {
        const index = state.roles.findIndex((roleItem: UserRoleInterface) => {
          return roleItem.id === roleId;
        });

        if (index >= 0) {
          state.roles.splice(index, 1);
        }
      },
    },
  },
};
