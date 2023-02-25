import { InfoContainer, AboutMeContainer } from "./aboutMeStyle";

const AboutMe = ({
  name,
  lastname,
  information,
  mainPicture,
  aboutPicture,
  aboutDescription,
}) => {
  return (
    <>
      <InfoContainer>
        <div className="info">
          <h1>
            Soy <span>{name}</span> {lastname}
          </h1>
          <p>{information}</p>
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
