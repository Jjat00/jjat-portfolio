import styled from "styled-components";

export const HeaderContainer = styled.header`
  nav {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 14%;
    background-color: var(--primary-color);
    height: 80px;
    box-shadow: 0px 0px 10px rgba(0, 217, 255, 0.5);
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
