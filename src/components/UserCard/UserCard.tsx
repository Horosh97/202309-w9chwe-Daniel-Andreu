import { UserStructure } from "../../store/features/users/types";

interface UserCardProps {
  user: UserStructure;
}

const UserCard = ({
  user: { name, username, birthday, quote, profilePicture, interests },
}: UserCardProps): React.ReactElement => {
  return (
    <article className="user">
      <div className="user__left-container">
        <img className="user__image" src={profilePicture} alt={username} />
        <h2 className="user__name">{name}</h2>
        <h3 className="user__username">{username}</h3>
      </div>
      <div className="user__right-container">
        <div className="user__state">
          <h3 className="user__state-title">Estado:</h3>
          <span className="user__state-info">{quote}</span>
        </div>
        <div className="user__interests">
          <h3 className="user__interests-title">Intereses:</h3>
          <span className="user__interests-info">{interests}</span>
        </div>
        <div className="user__birthday">
          <h3 className="user__birthday-title">Fecha de nacimiento:</h3>
          <span className="user__birthday-info">{birthday}</span>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
