import { CardContainer } from "./cardStyle";

const Card = ({ title, img, description, technologies, code, website }) => {
  return (
    <CardContainer>
      <img src={img} alt="card" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="description">{description}</p>
        <p className="description">
          <span>Tecnologías:</span> {technologies}
        </p>
      </div>
      <div className="links">
        <a href={code} target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={website} target="_blank">
          <i className="fa fa-globe" aria-hidden="true"></i>
        </a>
      </div>
    </CardContainer>
  );
};

export default Card;
