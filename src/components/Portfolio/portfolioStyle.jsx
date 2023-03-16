import styled from "styled-components";

export const PortfolioContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  overflow-wrap: 20px;
  background-color: var(--primary-color);
  overflow: hidden;
  margin: 100px auto;

  h1 {
    font-size: 5rem;
    text-align: center;
    font-weight: bold;
    color: var(--secondary-color);
    margin: 0;
  }

  .wrapper-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 0 auto;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  @media (max-width: 800px) {
    .wrapper-cards {
      display: flex;
      flex-direction: column;
    }
  }
`;
