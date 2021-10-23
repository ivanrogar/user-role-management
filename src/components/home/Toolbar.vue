<template>
  <div class="row toolbar">
    <div class="form-group col-12 col-md-4">
      <search />
    </div>

    <div class="form-group col-12 col-md-4">
      <status-filter />
    </div>

    <div class="form-group col-12 col-md-4 actions">
      <actions />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@app/components/home/Search.vue";
import StatusFilter from "@app/components/home/StatusFilter.vue";
import Actions from "@app/components/home/Actions.vue";

@Component({
  components: {
    Search,
    StatusFilter,
    Actions,
  },
})
export default class Toolbar extends Vue {}
</script>
