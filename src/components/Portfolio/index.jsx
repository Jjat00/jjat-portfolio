import Card from "./../Card";
import { PortfolioContainer } from "./portfolioStyle";

const Portfolio = ({ contentCards }) => {
  return (
    <PortfolioContainer id="briefcase">
      <h1>Proyectos</h1>
      <div className="wrapper-cards">
        {contentCards.map((content, index) => (
          <Card
            key={index}
            title={content.title}
            img={content.img}
            description={content.description}
            technologies={content.technologies}
            code={content.code}
            website={content.website}
          />
        ))}
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
