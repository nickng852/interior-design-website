import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Body>
        <SocialMediaWrapper>
          <SocialMedia>
            <FaFacebookSquare />
          </SocialMedia>
          <SocialMedia>
            <FaInstagram />
          </SocialMedia>
        </SocialMediaWrapper>
        <Credit>© 2021 Renovate Interior Design</Credit>
      </Body>
    </>
  );
};

const Body = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem auto;
`;

const Credit = styled.div`
  margin-top: 0.8rem;
  font-family: source-han-sans-japanese, sans-serif;
  font-size: 0.85rem;
  font-weight: 200;
  letter-spacing: 0.025rem;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    font-size: 0.8rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 0.75rem;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #747d8c;
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    font-size: 1.25rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
  }
`;

export default Footer;
