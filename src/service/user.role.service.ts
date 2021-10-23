import { UserRoleInterface } from "@app/contract/data/user.role.interface";
import { default as roleData } from "@app/data/user_roles.json";

export class UserRoleService {
  private static fakeAutoIncrement = 10000;

  all(): UserRoleInterface[] {
    return roleData;
  }

  getById(roleId: number): UserRoleInterface | null {
    const roles: UserRoleInterface[] = roleData;

    for (const role of roles) {
      if (role.id === roleId) {
        return role;
      }
    }

    return null;
  }

  save(role: UserRoleInterface) {
    if (!Array.isArray(role.users)) {
      role.users = [];
    }

    const date = new Date();

    const now = date.toISOString();

    if (!role.id) {
      role.id = UserRoleService.fakeAutoIncrement++;
      role.created_on = now;
    }

    role.modified_on = now;
  }
}
