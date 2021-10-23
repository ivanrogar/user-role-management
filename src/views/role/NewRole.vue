<template>
  <div class="container-fluid">
    <h1>
      {{ $t("New Role") }}
    </h1>

    <hr />

    <role-form v-on:after-save="afterSave" :item="defaultItem" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RoleForm from "@app/components/role/RoleForm.vue";
import { UserRoleInterface } from "@app/contract/data/user.role.interface";
import { StoresEnum } from "@app/enums/stores.enum";
import { StoreActionsEnums } from "@app/enums/store.actions.enums";
import { Notifier } from "@app/action/notifier";

@Component({
  components: {
    RoleForm,
  },
})
export default class NewRole extends Vue {
  defaultItem: UserRoleInterface = {
    editable: true,
    active: true,
  };

  private notifier: Notifier;

  constructor() {
    super();

    this.notifier = new Notifier();
  }

  afterSave(model: UserRoleInterface) {
    this.$store.dispatch(
      StoresEnum.ROLE_LIST + "/" + StoreActionsEnums.ROLE_LIST_ADD_ROLE,
      model
    );

    this.notifier.add("Role added successfully");

    this.$router.push({ name: "Home" });
  }
}
</script>
