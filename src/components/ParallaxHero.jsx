import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import ParallaxSrc from "../assets/images/Parallax(1).jpg";

const ParallaxBanner = () => (
  <>
    <Body>
      <ParallaxImg bgImage={ParallaxSrc} bgImageAlt="" strength={500}>
        <ParallaxTitle>PROJECTS</ParallaxTitle>
      </ParallaxImg>
    </Body>
  </>
);

const Body = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 85%;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    top: -50px;
    width: 100%;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
  }
`;

const ParallaxImg = styled(Parallax)`
  position: relative;
  height: 42vh;
  object-fit: cover;

  @media (max-width: 992px) {
    height: 30vh;
  }

  @media (max-width: 768px) {
    height: 25vh;
  }
`;

const ParallaxTitle = styled.div`
  margin: 25.5rem 0 0 4rem;
  padding: 1.5rem 0;
  color: #fff;
  font-family: "Poppins", san-serif;
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 992px) {
    margin: 16rem 0 0 3rem;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    margin: 14rem 0 0 2rem;
    font-size: 1.8rem;
  }
`;

export default ParallaxBanner;
