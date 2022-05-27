import {IUser} from "../users/IUser";

export interface AuthResponse{
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
