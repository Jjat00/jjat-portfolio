import { CardContainer } from "./cardStyle";

import capturaDeptherm from "./../../images/captura-deptherm.png";

const Card = ({ title, img, description, technologies, code, website }) => {
  return (
    <CardContainer>
      <div className="card-img">
        <img src={capturaDeptherm} alt="card" className="img-jjat-briefcase" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="description">{description}</p>
        <p className="description">
          <span>Technologies:</span> {technologies},
        </p>
        <div className="links">
          <a href={code} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
