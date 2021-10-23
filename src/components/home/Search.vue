<template>
  <fragment>
    <label for="search"> &nbsp; </label>
    <input
      type="text"
      id="search"
      class="form-control"
      :placeholder="$t('Search')"
      @input="onSearch"
      v-on:change="onSearch"
      :value="searchText"
    />
  </fragment>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { StoresEnum } from "@app/enums/stores.enum";
import { StoreActionsEnums } from "@app/enums/store.actions.enums";
import { mapState } from "vuex";

@Component({
  computed: mapState(StoresEnum.ROLE_LIST, ["searchText"]),
})
export default class Search extends Vue {
  searchText!: string;

  onSearch(e: any) {
    this.$store.dispatch(
      StoresEnum.ROLE_LIST + "/" + StoreActionsEnums.ROLE_LIST_SET_SEARCH_TEXT,
      e.target.value
    );
  }
}
</script>
