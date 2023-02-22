import styled from "styled-components";

export const InfoContainer = styled.section`
  span {
    color: var(--secondary-color);
  }

  /* max-width: 1200px; */
  /* min-width: 500px; */
  margin: 0 auto;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  justify-items: space-between;
  padding: 80px 0;

  .info h1 {
    font-size: 4rem;
    /* text-align: center; */
    font-weight: bold;
    color: var(--white);
    margin: 20px 0;
  }

  .info p {
    text-align: justify;
    color: var(--very-light-pink);
    font-size: var(--md);
    font-size: 1.5rem;
    margin: 30px 0;
  }

  .img-jjat {
    width: 70%;
    height: auto;
    border: 3px solid var(--secondary-color);
    box-shadow: 0px 0px 10px rgba(3, 217, 255, 0.9);
    border-radius: 70%;
    background-color: var(--primary-color);
    justify-self: end;
  }

  @media (max-width: 1142px) {
    .img-jjat {
      justify-self: center;
    }
  }

  .primary-button {
    padding: 10px 20px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 20px;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(3, 217, 255, 0.9);
  }
  .primary-button:hover {
    background-color: var(--white);
    color: var(--black);
    box-shadow: none;
    transition: ease-in-out 0.3s;
  }
`;

export const AboutMeContainer = styled.section`
  /* width: 70vw; */
  display: grid;
  padding: 80px 0;
  height: 70vh;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  justify-items: space-between;

  .img-jjat2 {
    width: 70%;
    height: auto;
    border: 3px solid var(--secondary-color);
    box-shadow: 0px 0px 10px rgba(3, 217, 255, 0.9);
    border-radius: 50%;
  }
  @media (max-width: 1142px) {
    .img-jjat2 {
      justify-self: center;
    }
  }

  .info-about-me h1 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--white);
    margin: 0;
  }

  .divider {
    width: 10%;
    height: 4px;
    background-color: var(--secondary-color);
    margin-bottom: 20px;
  }

  .info-about-me p {
    text-align: justify;
    color: var(--very-light-pink);
    font-size: 1.5rem;
  }

  .content-about {
    margin: 50px 0;
  }

  .content-about p {
    margin-bottom: 20px;
  }
`;
