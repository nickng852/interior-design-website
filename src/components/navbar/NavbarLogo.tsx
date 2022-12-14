import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { INavbar } from "../../interfaces/navbar";

const NavbarLogo: FC<INavbar> = ({
  isNavbarDark,
  navbarTransition,
  toggle,
}) => {
  const scrollTopTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to="/" onClick={scrollTopTop}>
      <Logo
        isNavbarDark={isNavbarDark}
        toggle={toggle}
        className={navbarTransition ? "logo-active" : ""}
      >
        Renovate <span>Interior Design</span>
      </Logo>
    </Link>
  );
};

const Logo = styled.div<INavbar>`
  font-family: "Jost", sans-serif;
  font-size: 1rem;
  color: ${({ isNavbarDark, toggle }) =>
    isNavbarDark || toggle ? "#000000" : "#ffffff"};
  transition: all 0.3s ease;

  span {
    font-size: 0.75rem;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;

    span {
      font-size: 0.85rem;
    }
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;

    span {
      font-size: 0.95rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.4rem;

    span {
      font-size: 1.05rem;
    }
  }
`;

export default NavbarLogo;
