<template>
  <fragment>
    <button class="btn btn-success" type="button" v-on:click="onNewRole">
      {{ $t("Create New Role") }}
    </button>
  </fragment>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Actions extends Vue {
  onNewRole() {
    this.$router.push({ name: "New Role" });
  }
}
</script>
