import $api from "../api";
import {AxiosResponse} from "axios";
import {IUsers} from "../types/users/IUsers";

export default class UserService {
  static getUsers(): Promise<AxiosResponse<IUsers[]>> {
    return $api.get<IUsers[]>('/users')
  }
}
