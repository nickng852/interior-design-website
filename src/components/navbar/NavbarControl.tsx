import React, { FC } from "react";
import styled from "styled-components";

import { IToggle } from "../../interfaces/toggle";

const NavbarControl: FC<IToggle> = ({ isHomePage, toggle, onClick }) => {
  return (
    <Wrapper isHomePage={isHomePage} toggle={toggle} onClick={onClick}>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div<IToggle>`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1.3rem;
  }

  @media (min-width: 992px) {
    padding: 1.6rem;
  }

  @media (min-width: 1200px) {
    padding: 1.9rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    ::before,
    ::after {
      content: "";
      position: absolute;
      width: 22.5px;
      height: 2px;
      background-color: ${({ isHomePage, toggle }) =>
        isHomePage && !toggle ? "#ffffff" : "#000000"};
      border-radius: 35px;
      transition: all 0.3s ease;

      @media (min-width: 768px) {
        width: 25px;
      }

      @media (min-width: 992px) {
        width: 27.5px;
      }

      @media (min-width: 1200px) {
        width: 30px;
      }
    }

    ::before {
      transform: ${({ toggle }) =>
        toggle ? "rotate(45deg)" : "translateY(-4.5px)"};
    }
    ::after {
      transform: ${({ toggle }) =>
        toggle ? "rotate(-45deg)" : "translateY(4.5px)"};
    }
  }
`;

export default NavbarControl;
