import { InfoContainer, AboutMeContainer } from "./aboutMeStyle";

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
          <div class="social-media">
            <a href={linkedIn} target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href={github} target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <img src={mainPicture} alt="main picture" className="img-jjat" />
      </InfoContainer>
      <AboutMeContainer id="about">
        <img src={aboutPicture} alt="about picture" className="img-jjat2" />
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
