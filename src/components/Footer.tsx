import React from "react";
import styled from "styled-components";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Main>
      <SocialMediaWrapper>
        <SocialMedia>
          <FaFacebookSquare />
        </SocialMedia>

        <SocialMedia>
          <FaInstagram />
        </SocialMedia>
      </SocialMediaWrapper>

      <Credit>© 2021 Renovate Interior Design</Credit>
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;

  @media (min-width: 992px) {
    padding: 2rem 0;
    gap: 1.5rem;
  }
`;

const Credit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Jost", sans-serif;
  font-size: 0.8rem;
  font-weight: 200;
  letter-spacing: 0.025rem;

  @media (min-width: 992px) {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 992px) {
    gap: 2.5rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #626770;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export default Footer;
