import { FooterContainer } from "./footerStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <h1>Jaime Aza</h1>
        <h2>Full Stack Developer Engineer</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/jaimeaza/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/JjatDeci" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
