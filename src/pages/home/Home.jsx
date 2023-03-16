// Components
import AboutMe from "../../components/AboutMe";
import Portfolio from "../../components/Portfolio";
import ParticleBackground from "../../components/ParticleBackground";
// Pages
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
// Contents
import contentCards from "../../components/Card/contentCards";
import contentAboutMe from "../../components/AboutMe/contentAbutMe";
// Styles
import { MainContainer } from "./HomeStyle";

const Home = () => {
  return (
    <div>
      <ParticleBackground />
      <Header />
      <MainContainer>
        <Portfolio contentCards={contentCards} />
        <AboutMe
          name={contentAboutMe.name}
          lastname={contentAboutMe.lastname}
          information={contentAboutMe.information}
          mainPicture={contentAboutMe.mainPicture}
          aboutPicture={contentAboutMe.aboutPicture}
          aboutDescription={contentAboutMe.aboutDescription}
        />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
