<template>
  <fragment>
    <label for="status-filter">
      {{ $t("Role Status") }}
    </label>
    <select class="form-control" id="status-filter" @input="onFilter">
      <option
        v-for="option in getOptions()"
        :key="option.value"
        :value="option.value"
        :selected="statusFilter === option.value"
      >
        {{ $t(option.label) }}
      </option>
    </select>
  </fragment>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { StoresEnum } from "@app/enums/stores.enum";
import { RoleStatusEnum } from "@app/enums/role.status.enum";
import { StoreActionsEnums } from "@app/enums/store.actions.enums";

@Component({
  computed: mapState(StoresEnum.ROLE_LIST, ["statusFilter"]),
})
export default class StatusFilter extends Vue {
  statusFilter!: string;

  onFilter(e) {
    this.$store.dispatch(
      StoresEnum.ROLE_LIST +
        "/" +
        StoreActionsEnums.ROLE_LIST_SET_STATUS_FILTER,
      e.target.value
    );
  }

  getOptions() {
    return [
      {
        value: RoleStatusEnum.ACTIVE,
        label: "Active",
      },
      {
        value: RoleStatusEnum.INACTIVE,
        label: "Inactive",
      },
      {
        value: RoleStatusEnum.ACTIVE_AND_INACTIVE,
        label: "Active and Inactive",
      },
    ];
  }
}
</script>
