import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  min-width: 310px;
  max-width: 500px;
  border-radius: 10px;
  background-color: #1a1a1a;
  /* box-shadow: 0 0 10px var(--secondary-color); */
  overflow: hidden;
  height: 500px;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
  }

  &:hover {
    .card-title {
      color: var(--secondary-color);
    }
  }

  .card-img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 40%;
    object-fit: cover;
  }

  .card-content {
    position: absolute;
    top: 40%;
    padding: 0 10px;
  }

  .card-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--white);
    margin: 10px 0;
  }

  .description {
    text-align: left;
    font-size: 1.5rem;
    line-height: 2.3rem;
    margin: 0 10px 10px;
    color: var(--very-light-pink);
  }

  .description span {
    color: var(--secondary-color);
    font-weight: bold;
  }

  .links {
    position: absolute;
    bottom: 20px;
  }

  .links a {
    cursor: pointer;
    font-size: 2rem;
    margin: 0 10px;
    /* text-decoration: none; */
  }

  .links a:first-child {
    color: #e6dd62;
  }
  .links a:nth-child(2) {
    color: #e6627a;
  }

  .links a:hover {
    color: var(--white);
  }
`;
