import {atom} from "recoil";
import {IUsers} from "../types/users/IUsers";

const userStateAtom = atom({
  key: "userState",
  default: {}
})

const userListAtom = atom({
  key: 'userList',
  default: [] as IUsers[]
})

export {userStateAtom, userListAtom}
