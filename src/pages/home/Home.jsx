// Components
import AboutMe from "../../components/AboutMe";
import Portfolio from "../../components/Portfolio";
// Pages
import Header from "../Header";
import Footer from "../Footer";
// Contents
import contentCards from "../../components/Card/contentCards";
import contentAboutMe from "../../components/AboutMe/contentAbutMe";
// Styles
import { MainContainer } from "./HomeStyle";

const Home = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <AboutMe
          name={contentAboutMe.name}
          lastname={contentAboutMe.lastname}
          information={contentAboutMe.information}
          mainPicture={contentAboutMe.mainPicture}
          aboutPicture={contentAboutMe.aboutPicture}
          aboutDescription={contentAboutMe.aboutDescription}
        />

        <Portfolio contentCards={contentCards} />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
