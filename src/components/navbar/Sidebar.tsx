import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { INavbar } from "../../interfaces/navbar";

const Sidebar: FC<INavbar> = ({ onClick }) => {
  return (
    <Menu>
      <Link to="/" onClick={onClick}>
        <MenuItem data-aos="fade-right" data-aos-duration="1000">
          Home
        </MenuItem>
      </Link>

      <Link to="/about" onClick={onClick}>
        <MenuItem
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          About
        </MenuItem>
      </Link>

      <Link to="/" onClick={onClick}>
        <MenuItem
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Project
        </MenuItem>
      </Link>

      <Link to="/contact" onClick={onClick}>
        <MenuItem
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="450"
        >
          Contact
        </MenuItem>
      </Link>
    </Menu>
  );
};

const Menu = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 3;
`;

const MenuItem = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  font-family: "Playfair Display", serif;
  font-size: 0.9rem;
  color: #000000;

  @media (min-width: 768px) {
    padding: 2.5rem 0;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    padding: 3rem 0;
    font-size: 1.1rem;
  }

  @media (min-width: 1200px) {
    padding: 3.5rem 0;
    font-size: 1.2rem;
  }

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 0.5px;
    background-color: #000000;
    opacity: 0;
    transition: all 0.3s ease;
  }

  :hover::after {
    width: 50px;
    opacity: 1;
  }
`;

export default Sidebar;
