import React, { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { IToggle } from "../../interfaces/toggle";

import NavbarLogo from "./NavbarLogo";
import NavbarControl from "./NavbarControl";
import Sidebar from "./Sidebar";

const Navbar: FC<IToggle> = ({ toggle, onClick }) => {
  const [isNavbarDark, setIsNavbarDark] = useState<boolean>(false);
  const [navbarTransition, setNavbarTransition] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contact") {
      setIsNavbarDark(true);
    } else {
      setIsNavbarDark(false);
    }
  }, [pathname]);

  const changeNavbarStyle = () => {
    let w = window.innerHeight;

    if (window.scrollY >= w) {
      setNavbarTransition(true);
    } else {
      setNavbarTransition(false);
    }
  };

  window.addEventListener("scroll", changeNavbarStyle);

  return (
    <>
      <Main navbarTransition={navbarTransition} toggle={toggle}>
        <NavbarLogo
          isNavbarDark={isNavbarDark}
          navbarTransition={navbarTransition}
          toggle={toggle}
        />
        <NavbarControl
          isNavbarDark={isNavbarDark}
          navbarTransition={navbarTransition}
          toggle={toggle}
          onClick={onClick}
        />
      </Main>

      {toggle && <Sidebar onClick={onClick} />}
    </>
  );
};

const Main = styled.section<IToggle>`
  position: fixed;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ navbarTransition }) =>
    navbarTransition ? "#fefefe" : "transparent"};
  box-shadow: ${({ navbarTransition, toggle }) =>
    navbarTransition && !toggle ? "0 1px 10px rgb(0 0 0 / 8.5%)" : "none"};
  transition: all 0.4s ease;
  z-index: 4;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 992px) {
    padding: 1.75rem;
  }

  @media (min-width: 1200px) {
    padding: ${({ navbarTransition }) =>
      navbarTransition ? "1rem 6rem" : "2.75rem 6rem"};
  }
`;

export default Navbar;
