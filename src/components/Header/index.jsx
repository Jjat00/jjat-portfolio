import iconMenu from "./../../assets/icon_menu.svg";
import { HeaderContainer } from "./headerStyle";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <div className="logo">
          <h2>
            <span>Jaime</span> Aza
          </h2>
        </div>
        <ul className="menu">
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#about">Sobre mí</a>
          </li>
          <li>
            <a href="/#briefcase">Proyectos</a>
          </li>
        </ul>
        <img src={iconMenu} alt="icon" className="icon" />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
