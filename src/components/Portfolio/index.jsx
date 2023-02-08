import Card from "./../Card";
import { PortfolioContainer } from "./portfolioStyle";

const Portfolio = ({ contentCards }) => {
  return (
    <PortfolioContainer id="briefcase">
      <h1>Portafolio</h1>
      <div class="wrapper-cards">
        {contentCards.map((content, index) => (
          <Card
            key={index}
            title={content.title}
            img={content.img}
            description={content.description}
            technologies={content.technologies}
          />
        ))}
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
