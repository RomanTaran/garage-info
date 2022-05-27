import axios, {AxiosError} from "axios";
import {toast} from "react-hot-toast";
import {ErrorResponseData} from "../types/response/ErrorResponseData";

export default function errorHandling(err: AxiosError | Error) {
  if (axios.isAxiosError(err)) {
    toast.error((err?.response?.data as ErrorResponseData).message);
  }
}
