// Components
import AboutMe from "../../components/AboutMe";
import Portfolio from "../../components/Portfolio";
// Pages
import Header from "../Header";
import Footer from "../Footer";
// Contents
import { contentCards } from "../../components/Card/contentCards";
import { contentAboutMe } from "../../components/AboutMe/contentAbutMe";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMe
          name={contentAboutMe.name}
          lastname={contentAboutMe.lastname}
          information={contentAboutMe.information}
          mainPicture={contentAboutMe.mainPicture}
          aboutPicture={contentAboutMe.aboutPicture}
          aboutDescription={contentAboutMe.aboutDescription}
        />

        <Portfolio contentCards={contentCards} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
