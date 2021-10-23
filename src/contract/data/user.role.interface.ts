import { UserInterface } from "@app/contract/data/user.interface";

export interface UserRoleInterface {
  id?: number;
  name?: string;
  type?: string;
  description?: string;
  editable?: boolean;
  active?: boolean;
  users?: UserInterface[];
  created_on?: string;
  modified_on?: string;
}
