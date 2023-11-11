import { useEffect } from "react";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store/hooks";
import { loadUsersActionCreator } from "../../store/features/users/usersSlice";
import UsersList from "../../components/UsersList/UsersList";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsers } = useUsersApi();

  useEffect(() => {
    (async () => {
      const actualUsers = await getUsers();
      dispatch(loadUsersActionCreator(actualUsers));
    })();
  }, [dispatch, getUsers]);

  return (
    <main>
      <UsersList />
    </main>
  );
};
export default HomePage;
