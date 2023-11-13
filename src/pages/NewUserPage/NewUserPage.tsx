import { useDispatch } from "react-redux";
import UserForm from "../../components/UserForm/UserForm";
import useUsersApi from "../../hooks/useUsersApi";
import NewUserPageStyled from "./NewUserPageStyled";
import { useNavigate } from "react-router-dom";
import {
  UserStructure,
  UserStructureWithoutId,
} from "../../store/features/users/types";
import { addUserActionCreator } from "../../store/features/users/usersSlice";

const NewUserPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addNewUser } = useUsersApi();

  const addUserOnSubmit = async (newUser: UserStructureWithoutId) => {
    try {
      const returnedUserFromApi: UserStructure = await addNewUser(newUser);
      dispatch(addUserActionCreator(returnedUserFromApi));
      navigate("/inicio");
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return (
    <NewUserPageStyled>
      <UserForm actionOnSubmit={addUserOnSubmit} />
    </NewUserPageStyled>
  );
};
export default NewUserPage;
