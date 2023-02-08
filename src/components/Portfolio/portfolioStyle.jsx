import styled from "styled-components";

export const PortfolioContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  overflow-wrap: 20px;
  background-color: var(--primary-color);

  h1 {
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    color: var(--secondary-color);
    margin: 0;
  }

  .wrapper-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 auto;
    padding: 100px 0;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
  }

  .card {
    display: flex;
    width: 100%;
    height: 250px;
    /* border: 3px solid var(--secondary-color); */
    box-shadow: 0px 0px 10px rgba(3, 217, 255, 0.9);
    border-radius: 10px;
  }

  .img-jjat-briefcase {
    width: 400px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
  .card-content {
    padding: 0 20px 20px;
  }
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--white);
    margin: 0;
  }
  .description {
    text-align: justify;
    color: var(--very-light-pink);
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary-color);
    font-size: 2.5rem;
    padding: 20px;
  }
`;
