import { InfoContainer, AboutMeContainer } from "./aboutMeStyle";
import jjatImage from "../../images/jjat_1.jpg";
import JjatImage2 from "../../images/jjat_2.jpg";

const AboutMe = ({
  name,
  lastname,
  information,
  mainPicture,
  aboutPicture,
  aboutDescription,
  linkedIn,
  github,
}) => {
  return (
    <>
      <InfoContainer>
        <div className="info">
          <h1>
            <span>{name}</span> {lastname}
          </h1>
          <p>{information}</p>
          <div className="social-media">
            <a href={linkedIn} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={github} target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={jjatImage} alt="main picture" className="img-jjat" />
        </div>
      </InfoContainer>
      <AboutMeContainer id="about">
        <div class="img-jjat2-container">
          <img class="img-jjat2" src={JjatImage2} alt="description" />
        </div>
        <div className="info-about-me">
          <h1>Sobre mí</h1>
          <div className="divider"></div>
          <div className="content-about">
            <p>{aboutDescription}</p>
          </div>
        </div>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;
