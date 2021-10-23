<template>
  <div class="row role-list">
    <div
      class="col-12 col-md-4"
      :key="item.id"
      v-for="item in getFilteredList()"
    >
      <role-item :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { StoresEnum } from "@app/enums/stores.enum";
import { UserRoleInterface } from "@app/contract/data/user.role.interface";
import RoleItem from "@app/components/home/role-list/RoleItem.vue";
import { RoleStatusEnum } from "@app/enums/role.status.enum";

@Component({
  computed: mapState(StoresEnum.ROLE_LIST, [
    "searchText",
    "statusFilter",
    "roles",
  ]),
  components: {
    RoleItem,
  },
})
export default class RoleList extends Vue {
  searchText!: string;
  statusFilter!: string;
  roles!: UserRoleInterface[];

  getFilteredList() {
    let filteredRoles = this.roles.filter((role: UserRoleInterface) => {
      switch (this.statusFilter) {
        case RoleStatusEnum.ACTIVE:
          return role.active;
        case RoleStatusEnum.INACTIVE:
          return !role.active;
        default:
          return true;
      }
    });

    let searchText = this.searchText.trim();

    if (searchText !== "") {
      return filteredRoles.filter((role: UserRoleInterface) => {
        searchText = searchText.toLowerCase();

        let name = "";

        if (role.name !== undefined) {
          name = role.name.toLowerCase();
        }

        return name.indexOf(searchText) > -1;
      });
    }

    return filteredRoles;
  }
}
</script>
