import $api, {API_URL} from "../api";
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "../types/response/AuthResponse";

export default class AuthService {
  static async login(email: string, password: string)/*: Promise<AxiosResponse<AuthResponse>>*/ {
    return $api.post/*<AuthResponse>*/('/auth/login', {email, password})
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout')
  }

  static async forgotPassword(email: string): Promise<void> {
    return axios.post(`${API_URL}auth/forgot-password`, {email: email}, {withCredentials: true})
  }

  static async resetPassword(password: string, token: string|null): Promise<void> {
    return axios.post(`${API_URL}auth/reset-password?resetPasswordToken=${token}`, {password: password}, {withCredentials: true})
  }
}
