import React, { FC } from "react";
import styled from "styled-components";
import NavbarLogo from "./NavbarLogo";
import NavbarControl from "./NavbarControl";
import Sidebar from "./Sidebar";

interface Props {
  toggle?: boolean;
  onClick?: () => void;
}

const Navbar: FC<Props> = ({ toggle, onClick }) => {
  return (
    <>
      <Main>
        <NavbarLogo toggle={toggle} />
        <NavbarControl toggle={toggle} onClick={onClick} />
      </Main>

      {toggle && (
        <>
          <Sidebar onClick={onClick} />
        </>
      )}
    </>
  );
};

const Main = styled.section<Props>`
  position: fixed;
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 4;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 992px) {
    padding: 1.75rem;
  }

  @media (min-width: 1200px) {
    padding: 2.75rem 6rem;
  }
`;

export default Navbar;
