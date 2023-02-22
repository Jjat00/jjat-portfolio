import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  background-color: var(--primary-color);
  box-shadow: 0px 0px 10px rgba(0, 217, 255, 0.5);
  z-index: 9999;

  nav {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  ul li a {
    margin: 0 20px;
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
    font-size: 2rem;
    /* margin: 0 0 0 100px; */
    font-weight: bold;
    color: var(--white);
  }
  span {
    color: var(--secondary-color);
  }
  .icon {
    display: none;
  }

  .menu .active {
    color: var(--secondary-color);
  }
`;
