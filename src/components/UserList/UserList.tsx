import React, {useEffect, useState} from 'react';
import UserService from "../../services/UserService";
import axios, {AxiosError} from "axios";
import {toast} from "react-hot-toast";
import {ErrorResponseData} from "../../types/response/ErrorResponseData";
import {useSetRecoilState} from "recoil";
import {userListAtom} from "../../state";
import Spinner from "../Spinner";

const UserList = () => {
  const [isLoading, setLoading] = useState(false);
  const setUserList = useSetRecoilState(userListAtom);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const {data} = await UserService.getUsers();
        setUserList(data);
      } catch (err) {
        const error = err as AxiosError | Error;
        if (axios.isAxiosError(error)) {
          toast.error((error?.response?.data as ErrorResponseData).message);
        }
      } finally {
        setLoading(false);
      }
    })()
  }, [])

  if (isLoading) return <Spinner />
  return (
    <div>
      Users
    </div>
  );
};

export default UserList;
