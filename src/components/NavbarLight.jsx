import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./NavbarLogo";
import { Hamburger } from "./NavbarToggle";
import styled from "styled-components";
import Aos from "aos";

const NavbarLight = ({ open, setOpen, navbar, setNavbar }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  // functions
  const toTheTop = () => {
    // scroll to the top if the user click on the logo
    window.scrollTo(0, 0);

    // close the sidebar if it is opened
    if (open) {
      setOpen(false);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  const navbarTransition = () => {
    // get the viewport height of all devices
    let w = window.innerHeight;

    // trigger navbar transition when it scrolls over 100%
    if (window.scrollY >= w) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // listen to scroll event to trigger navbarTransition()
  document.addEventListener("scroll", navbarTransition);

  const keyPress = (e) => {
    // press "Esc" to close the sidebar if it is opened
    if (open && e.key === "Escape") {
      setOpen(false);
    }
  };

  // listen to keydown event to trigger keyPress()
  document.addEventListener("keydown", keyPress);

  return (
    <>
      <Nav navbar={navbar}>
        <Logo
          to="/"
          navbar={navbar}
          className={open ? "logo-active" : ""}
          onClick={toTheTop}
        >
          Renovate <span>Interior Design</span>
        </Logo>
        <HamburgerBtnWrapper onClick={toggle}>
          <HamburgerBtn>
            <Hamburger
              open={open}
              navbar={navbar}
              className={open ? "hamburger-active" : ""}
            />
          </HamburgerBtn>
        </HamburgerBtnWrapper>
        {open ? (
          <SideNav open={open}>
            <Menu>
              <MenuLink
                exact
                to="/"
                onClick={toggle}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Home
              </MenuLink>
              <MenuLink
                to="/about"
                onClick={toggle}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                About
              </MenuLink>
              <MenuLink
                to="/service"
                onClick={toggle}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Service
              </MenuLink>
              <MenuLink
                to="/jobreference"
                onClick={toggle}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="450"
              >
                Project
              </MenuLink>
              <MenuLink
                to="/contact"
                onClick={toggle}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                Contact
              </MenuLink>
            </Menu>
          </SideNav>
        ) : null}
      </Nav>
    </>
  );
};

const Nav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ navbar }) => (navbar ? "#fefefe" : "transparent")};
  box-shadow: ${({ navbar }) =>
    navbar ? "0 1px 10px rgb(0 0 0 / 8.5%)" : "none"};
  transition: all 0.3s ease;
  z-index: 5;
`;

const HamburgerBtnWrapper = styled.div`
  margin: 0.5rem 3rem;
  padding: 1.8rem;
  cursor: pointer;
  z-index: 10;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    margin: 0.5rem 2rem;
    padding: 1.5rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    margin: 0.5rem 1rem;
    padding: 1rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin: 0.5rem;
    padding: 0.9rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin: 0;
    padding: 0.8rem;
  }
`;

const HamburgerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow: hidden;
  touch-action: none;
  transition: all 0.3s ease;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MenuLink = styled(Link)`
  padding: 3.25rem 100vw;
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: #000;

  &:hover {
    color: #000;
  }

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 0.5px;
    background-color: #000;
    opacity: 0;
    transition: all 0.3s ease;
  }

  :hover::after {
    width: 100%;
    opacity: 1;
  }

  &.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.5px;
    background-color: #000;
    opacity: 1;
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    padding: 1.6rem 100vw;
    font-size: 1rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    padding: 3.25rem 100vw;
    font-size: 1.15rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    font-size: 1.1rem;

    ::after {
      display: none;
    }

    &.active::after {
      display: none;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    padding: 2.5rem 100vw;
    font-size: 1.05rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    padding: 2rem 100vw;
    font-size: 1rem;
  }
`;

export default NavbarLight;
