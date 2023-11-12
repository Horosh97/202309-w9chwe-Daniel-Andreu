import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">ISDIgram</h1>
      <ul className="header__navigation">
        <li>
          <NavLink to="/inicio">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/añadir">Añadir usuario</NavLink>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
