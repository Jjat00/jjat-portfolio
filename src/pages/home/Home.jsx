// Components
import AboutMe from "../../components/AboutMe";
import Portfolio from "../../components/Portfolio";
import Chatbot from "../../components/Chat/Chatbot";
// Pages
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
// Contents
import contentCards from "../../components/Card/contentCards.json";
import contentAboutMe from "../../components/AboutMe/contentAbutMe.json";
import { contextChatBot } from "../../utils/createContextChatbot";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <AboutMe
          name={contentAboutMe.name}
          lastname={contentAboutMe.lastname}
          information={contentAboutMe.information}
          mainPicture={contentAboutMe.mainPicture}
          linkedIn={contentAboutMe.linkedIn}
          github={contentAboutMe.github}
          aboutPicture={contentAboutMe.aboutPicture}
          aboutDescription={contentAboutMe.aboutDescription}
        />
        <Portfolio contentCards={contentCards} />
        <Chatbot
          context={contextChatBot({
            contentCards,
            contentAboutMe,
          })}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
