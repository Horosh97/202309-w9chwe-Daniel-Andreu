import { useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";
import UsersListStyled from "./UsersListStyled";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector((state) => {
    return state.usersState.users;
  });

  return (
    <UsersListStyled>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UsersListStyled>
  );
};
export default UsersList;
