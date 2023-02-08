import iconMenu from "./../../assets/icon_menu.svg";
import { HeaderContainer } from "./headerStyle";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <div className="logo">
          <h2>
            <span>JJ</span>AT
          </h2>
        </div>
        <ul className="menu">
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/#about">About me</a>
          </li>
          <li>
            <a href="/#briefcase">Briefcase</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <img src={iconMenu} alt="icon" className="icon" />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
