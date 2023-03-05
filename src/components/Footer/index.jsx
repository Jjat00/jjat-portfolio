import { FooterContainer } from "./footerStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <h1>Jaime Aza</h1>
        <h2>Full stack developer</h2>
        <div class="social-media">
          <a href="/">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
