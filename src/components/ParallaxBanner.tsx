import React from "react";
import styled from "styled-components";

import { Parallax } from "react-parallax";
import bgImage from "../assets/images/Parallax(1).jpg";

const ParallaxBanner = () => (
  <ParallaxImg bgImage={bgImage} bgImageAlt="" strength={300}>
    <Wrapper>
      <ParallaxTitle>About</ParallaxTitle>
    </Wrapper>
  </ParallaxImg>
);

const ParallaxImg = styled(Parallax)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const ParallaxTitle = styled.div`
  font-family: "Poppins", san-serif;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  cursor: default;
  user-select: none;

  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

export default ParallaxBanner;
