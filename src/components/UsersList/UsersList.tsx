import { useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector((state) => {
    return state.usersState.users;
  });

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};
export default UsersList;
