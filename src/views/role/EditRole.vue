<template>
  <div class="container-fluid" v-if="this.item !== null">
    <h1>{{ $t("Edit Role") }} #{{ item.id }}</h1>

    <role-form v-on:after-save="afterSave" :item="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserRoleInterface } from "@app/contract/data/user.role.interface";
import RoleForm from "@app/components/role/RoleForm.vue";
import { StoresEnum } from "@app/enums/stores.enum";
import { StoreActionsEnums } from "@app/enums/store.actions.enums";
import { Notifier } from "@app/action/notifier";
import { UserRoleService } from "@app/service/user.role.service";

@Component({
  components: {
    RoleForm,
  },
})
export default class EditRole extends Vue {
  item: UserRoleInterface | null = null;

  private notifier: Notifier;
  private userRoleService: UserRoleService;

  constructor() {
    super();

    this.notifier = new Notifier();
    this.userRoleService = new UserRoleService();
  }

  mounted() {
    const role = this.userRoleService.getById(Number(this.$route.params.id));

    if (role === null) {
      this.notifier.add("Role not found", "warning");
      this.$router.push({ name: "Home" });
      return;
    }

    this.item = role;
  }

  afterSave(model: UserRoleInterface) {
    this.$store.dispatch(
      StoresEnum.ROLE_LIST + "/" + StoreActionsEnums.ROLE_LIST_UPDATE_ROLE,
      model
    );

    this.notifier.add("Role updated successfully");

    this.$router.push({ name: "Home" });
  }
}
</script>
