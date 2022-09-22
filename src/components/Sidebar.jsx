import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import the AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

const Sidebar = ({ open, setOpen }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
      {open ? (
        <SideNav open={open}>
          <Menu>
            <MenuLink
              to="/"
              exact
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Home
            </MenuLink>
            <MenuLink
              to="/about"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              About
            </MenuLink>
            <MenuLink
              to="/service"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Service
            </MenuLink>
            <MenuLink
              to="/jobreference"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="450"
            >
              Project
            </MenuLink>
            <MenuLink
              to="/contact"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Contact
            </MenuLink>
          </Menu>
        </SideNav>
      ) : null}
    </>
  );
};

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
    font-size: 1.3rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    font-size: 1.2rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    font-size: 1.15rem;

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
    font-size: 1.1rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    padding: 2rem 100vw;
    font-size: 1.05rem;
  }
`;

export default Sidebar;
