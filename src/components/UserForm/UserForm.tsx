import { useState } from "react";
import { UserStructureWithoutId } from "../../store/features/users/types";

interface UserFormProps {
  actionOnSubmit: (movie: UserStructureWithoutId) => void;
}

const UserForm = ({ actionOnSubmit }: UserFormProps): React.ReactElement => {
  const initialNewUser: UserStructureWithoutId = {
    name: "",
    username: "",
    birthday: "",
    profilePicture: "",
    quote: "",
    interests: "",
    isFriend: true,
  };

  const [newUser, setNewUser] = useState(initialNewUser);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((newUser: UserStructureWithoutId) => ({
      ...newUser,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newUser);
  };

  const { birthday, interests, name, profilePicture, quote, username } =
    newUser;

  return (
    <form className="user-form" autoComplete="off" onSubmit={onFormSubmit}>
      <div className="user-form__block">
        <label className="user-form__label" htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          className="user-form__input"
          required
          type="text"
          value={name}
          onChange={onChangeData}
        />
      </div>
      <div className="user-form__block">
        <label className="user-form__label" htmlFor="username">
          Nombre de usuario:
        </label>
        <input
          id="username"
          className="user-form__input"
          required
          type="text"
          value={username}
          onChange={onChangeData}
        />
      </div>
      <div className="user-form__block">
        <label className="user-form__label" htmlFor="birthday">
          Fecha de nacimiento:
        </label>
        <input
          id="birthday"
          className="user-form__input"
          required
          type="date"
          value={birthday}
          onChange={onChangeData}
        />
      </div>
      <div className="user-form__block">
        <label className="user-form__label" htmlFor="quote">
          Frase:
        </label>
        <input
          id="quote"
          className="user-form__input"
          required
          type="text"
          value={quote}
          onChange={onChangeData}
        />
      </div>
      <div className="user-form__block">
        <label className="user-form__label" htmlFor="interests">
          ¿Cuales son tus intereses?
        </label>
        <input
          id="interests"
          className="user-form__input"
          required
          type="text"
          value={interests}
          onChange={onChangeData}
        />
      </div>
      <div className="user-form__block">
        <label className="user-form__label" htmlFor="profilePicture">
          URL de la foto de perfil:
        </label>
        <input
          id="profilePicture"
          className="user-form__input"
          required
          type="text"
          value={profilePicture}
          onChange={onChangeData}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default UserForm;
