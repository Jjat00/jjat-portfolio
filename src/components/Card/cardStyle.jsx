import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  box-shadow: 0px 0px 5px rgba(3, 217, 255, 0.9);
  border-radius: 10px;
  justify-content: space-between;

  .img-jjat-briefcase {
    width: 100%;
    /* height: 260px; */
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
  .card-content {
    /* width: 100%; */
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

  .links a {
    cursor: pointer;
  }
`;
