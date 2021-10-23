<template>
  <div class="container-fluid">
    <h1>
      {{ $t("User Roles Management") }}
    </h1>

    <toolbar />

    <role-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toolbar from "@app/components/home/Toolbar.vue";
import RoleList from "@app/components/home/role-list/RoleList.vue";
import { UserRoleService } from "@app/service/user.role.service";
import { StoresEnum } from "@app/enums/stores.enum";
import { StoreActionsEnums } from "@app/enums/store.actions.enums";

@Component({
  components: {
    Toolbar,
    RoleList,
  },
})
export default class Home extends Vue {
  userRoleService: UserRoleService;

  constructor() {
    super();

    this.userRoleService = new UserRoleService();
  }

  mounted() {
    const roles = this.userRoleService.all();

    this.$store.dispatch(
      StoresEnum.ROLE_LIST + "/" + StoreActionsEnums.ROLE_LIST_SET_ROLES,
      roles
    );
  }
}
</script>
