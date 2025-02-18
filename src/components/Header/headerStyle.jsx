import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  background-color: var(--primary-color);
  box-shadow: 0px 0px 6px var(--secondary-color);
  z-index: 9999;
  font-size: 1.6rem;

  nav {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  ul {
    margin-left: -50px;
    display: flex;
    justify-content: left;
    list-style: none;
  }
  ul li a {
    margin-left: 20px;
    color: var(--white);
  }
  ul li a:hover {
    cursor: pointer;
    color: var(--secondary-color);
    transition: ease-in-out 0.3s;
  }
  ul li a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    background-color: var(--primary-color);
  }
  .logo h2 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--white);
  }
  span {
    color: var(--secondary-color);
    font-size: 3rem;
  }
  .icon {
    display: none;
  }

  @media (max-width: 480px) {
    .logo {
      display: none;
    }
    nav {
      justify-content: left;
    }
  }
`;
