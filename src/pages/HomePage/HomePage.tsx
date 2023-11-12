import { useEffect } from "react";
import useUsersApi from "../../hooks/useUsersApi";
import { useAppDispatch } from "../../store/hooks";
import { loadUsersActionCreator } from "../../store/features/users/usersSlice";
import UsersList from "../../components/UsersList/UsersList";
import HomePageStyled from "./HomePageStyled";

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
    <HomePageStyled>
      <main>
        <h1 className="main-heading">Usuarios añadidos</h1>
        <UsersList />
      </main>
    </HomePageStyled>
  );
};
export default HomePage;
