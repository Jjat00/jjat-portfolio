import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--secondary-color);
  overflow: hidden;
  height: 700px;

  .card-img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  .card-content {
    padding: 0 20px;
  }

  .card-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--white);
    margin: 10px 0;
  }

  .description {
    text-align: left;
    font-size: 1.5rem;
    margin: 0 20px 10px;
    color: var(--very-light-pink);
  }

  .links a {
    cursor: pointer;
    font-size: 4rem;
  }
`;
