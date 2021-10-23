<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form v-on:submit="onSubmit" ref="form">
          <div class="form-group">
            <label for="name" class="col-sm-2 col-form-label">
              {{ $t("Name") }}
            </label>
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="model.name"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label for="type" class="col-sm-2 col-form-label">
              {{ $t("Type") }}
            </label>
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="type"
                v-model="model.type"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label for="description" class="col-sm-2 col-form-label">
              {{ $t("Description") }}
            </label>
            <div class="col-sm-12">
              <textarea
                class="form-control"
                id="description"
                v-model="model.description"
                required
              >
              </textarea>
            </div>
          </div>

          <br />

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="editable"
              v-model="model.editable"
            />
            <label class="form-check-label" for="editable">
              {{ $t("Editable") }}
            </label>
          </div>

          <br />

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="active"
              v-model="model.active"
            />
            <label class="form-check-label" for="active">
              {{ $t("Active") }}
            </label>
          </div>

          <br />

          <div class="form-group">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-floppy-o"> </i>
                {{ $t("Save") }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UserRoleInterface } from "@app/contract/data/user.role.interface";
import { UserRoleService } from "@app/service/user.role.service";

@Component
export default class RoleForm extends Vue {
  @Prop({
    default: () => {
      return {};
    },
  })
  item!: UserRoleInterface;

  model: UserRoleInterface = {};

  userRoleService: UserRoleService;

  constructor() {
    super();

    this.userRoleService = new UserRoleService();
  }

  mounted() {
    this.model = Object.assign({}, this.item);
  }

  onSubmit(e: Event) {
    e.preventDefault();

    const form = this.$refs.form;

    if (form instanceof HTMLFormElement && form.checkValidity()) {
      this.userRoleService.save(this.model);
      this.$emit("after-save", Object.assign({}, this.model));
    }
  }
}
</script>
