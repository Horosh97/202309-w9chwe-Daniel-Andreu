import { useAppSelector } from "../../store/hooks";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector((state) => {
    return state.usersState.users;
  });

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          <div />
        </li>
      ))}
    </div>
  );
};
export default UsersList;
