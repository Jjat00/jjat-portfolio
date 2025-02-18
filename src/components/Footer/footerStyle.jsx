import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 80px 0;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2 {
    text-align: center;
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: var(--secondary-color);
  }
  h2 {
    font-size: 2.5rem;
    color: var(--very-light-pink);
  }
  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-media a {
    color: #fff;
    font-size: 3rem;
    padding: 10px 10px;
    text-decoration: none;
  }
`;
