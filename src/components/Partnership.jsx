import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Aos from "aos";

const Partnership = ({ logos }) => {
  useEffect(() => {
    Aos.init({ once: "true" });
  }, []);

  return (
    <>
      <Body>
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          Partnered with
        </SectionTitle>
        <LogoWrapper
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {logos.map((logo, index) => {
            return <Logo key={index} src={logo.src} />;
          })}
        </LogoWrapper>
      </Body>
    </>
  );
};

const Body = styled(Container)`
  margin: 8rem auto;
  max-width: 1500px;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    margin: 7rem auto;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    margin: 6.5rem auto;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    margin: 6rem auto;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin: 5.5rem auto;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin: 5rem auto;
  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 4rem;
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: #353b48;
  text-align: center;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    margin-bottom: 4rem;
    font-size: 1.2rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    margin-bottom: 3.5rem;
    font-size: 1.15rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    margin-bottom: 3rem;
    font-size: 1.1rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  margin: 0 1rem;
  width: 250px;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    opacity: 0.8;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    width: 200px;
  }
`;

export default Partnership;
