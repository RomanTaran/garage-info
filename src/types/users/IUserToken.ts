import {Roles} from "./Roles";

export interface IUserToken {
  role: Roles
  id: string
  iat: number
  exp: number
}
