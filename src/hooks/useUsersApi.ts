import { useCallback } from "react";
import { UserStructure } from "../store/features/users/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useUsersApi = () => {
  const getUsers = useCallback(async () => {
    const response = await fetch(apiUrl);
    const users = (await response.json()) as UserStructure[];

    return users;
  }, []);
  return {
    getUsers,
  };
};

export default useUsersApi;
