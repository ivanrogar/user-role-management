<template>
  <div class="card role-item">
    <div class="card-body">
      <span class="btn btn-danger inactive" v-if="!item.active">
        {{ $t("Inactive") }}
      </span>

      <h3>
        {{ item.name }}
      </h3>

      <h5>
        {{ item.type }}
      </h5>

      <p class="card-text">
        {{ item.description }}
      </p>

      <br />

      <div class="row">
        <div class="col-12 users">
          <user-item :key="user.id" v-for="user in item.users" :user="user" />
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div v-if="item.editable">
        <span>
          {{ $t("Last update") }}: {{ formatDate(item.modified_on) }}
        </span>
        <span class="links">
          <router-link :to="{ name: 'Edit Role', params: { id: item.id } }">
            {{ $t("Edit") }}
          </router-link>

          <a href="#" v-on:click="onDelete">
            {{ $t("Delete") }}
          </a>
        </span>
      </div>
      <div v-else>
        <span>
          {{ $t("Date created") }}: {{ formatDate(item.created_on) }}
        </span>
        <span class="lock">
          <i class="fa fa-lock" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UserRoleInterface } from "@app/contract/data/user.role.interface";
import moment from "moment";
import { StoresEnum } from "@app/enums/stores.enum";
import { StoreActionsEnums } from "@app/enums/store.actions.enums";
import UserItem from "@app/components/home/role-list/UserItem.vue";

@Component({
  components: {
    UserItem,
  },
})
export default class RoleItem extends Vue {
  @Prop({
    required: true,
  })
  item!: UserRoleInterface;

  formatDate(date: string) {
    return moment(date).format("DD/MM/YYYY").toString();
  }

  onDelete() {
    this.$swal({
      title: this.$t("Do you want to delete this role?"),
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        this.$store.dispatch(
          StoresEnum.ROLE_LIST + "/" + StoreActionsEnums.ROLE_LIST_REMOVE_ROLE,
          this.item.id
        );
      }
    });
  }
}
</script>
