import {atom} from "recoil";

const authStateAtom = atom({
  key: "authState",
  default: false
})

export {authStateAtom}
