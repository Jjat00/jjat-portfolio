import styled from "styled-components";

export const InfoContainer = styled.section`
  margin: 200px auto;
  height: 100%;
  display: grid;
  background-color: var(--primary-color);
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: center;
  justify-items: space-between;
  padding: 80px 0;
  overflow: hidden;
  gap: 10px;

  span {
    color: var(--secondary-color);
  }

  .info h1 {
    font-size: 6rem;
    /* text-align: center; */
    font-weight: 700;
    color: var(--white);
    margin: 20px 0;
  }

  .info p {
    /* text-align: justify; */
    color: var(--very-light-pink);
    font-size: var(--md);
    font-size: 2.5rem;
    margin: 30px 0;
  }

  .img-container {
    display: flex;
    width: 100%;
    overflow: hidden;
    justify-content: flex-end; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
  }

  .img-jjat {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    border: 3px solid var(--secondary-color);
    box-shadow: 0px 0px 10px var(--secondary-color);
    object-fit: cover;
  }

  .social-media {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .social-media a {
    color: #fff;
    font-size: 3rem;
    padding: 10px 10px;
    text-decoration: none;
  }

  @media (max-width: 1142px) {
    margin: 20px auto;

    .img-container {
      justify-content: center;
    }

    .img-jjat {
      width: 300px;
      height: 300px;
    }
  }

  .primary-button {
    padding: 10px 20px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 20px;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 10px var(--secondary-color);
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
  padding: 200px 0;
  height: 100%;
  margin: 100px auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: center;
  justify-items: space-between;
  background-color: var(--primary-color);
  overflow: hidden;

  .img-jjat2-container {
    width: 500px;
    border: 3px solid var(--secondary-color);
    box-shadow: 0px 0px 10px var(--secondary-color);
    overflow: hidden;
  }

  .img-jjat2 {
    width: 100%;
    scale: 1.5;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1142px) {
    margin: 20px auto;

    .img-jjat2 {
      justify-self: center;
      width: 300px;
      margin: 30px 0;
    }
  }

  .info-about-me h1 {
    font-size: 6rem;
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
    color: var(--very-light-pink);
    font-size: 2.5rem;
  }

  .content-about {
    margin: 50px 0;
  }

  .content-about p {
    margin-bottom: 20px;
  }
`;
