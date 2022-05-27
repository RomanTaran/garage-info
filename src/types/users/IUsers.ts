import {Roles} from "./Roles";

export interface IUsers{
  activationLink: string
  email: string
  first_name: string
  isActivated: boolean
  last_name: string
  password: string
  role: Roles
  _id: string
}
