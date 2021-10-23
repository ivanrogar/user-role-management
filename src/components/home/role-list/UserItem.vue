<template>
  <img
    class="img-fluid avatar"
    :src="user.photo_url"
    :title="getTitle()"
    :alt="getTitle()"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UserInterface } from "@app/contract/data/user.interface";

@Component
export default class UserItem extends Vue {
  @Prop({
    required: true,
  })
  user!: UserInterface;

  getTitle() {
    return this.user.first_name + " " + this.user.last_name;
  }
}
</script>
