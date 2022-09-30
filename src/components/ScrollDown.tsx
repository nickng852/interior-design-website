import React from "react";
import styled, { keyframes } from "styled-components";

const ScrollDown = () => {
  return (
    <Main>
      <ScrollText>Scroll</ScrollText>
      <ScrollLine />
    </Main>
  );
};

const Main = styled.section`
  position: absolute;
  bottom: 0;
  left: 2.75%;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 10rem;
  overflow: hidden;
  z-index: 2;

  @media (min-width: 768px) {
    height: 14rem;
  }

  @media (min-width: 992px) {
    height: 15rem;
  }

  @media (min-width: 1200px) {
    height: 16rem;
  }
`;

const ScrollText = styled.div`
  font-family: "Jost", sans-serif;
  font-size: 0.7rem;
  color: #fff;
  letter-spacing: 0.1rem;
  writing-mode: vertical-rl;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.15rem;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    letter-spacing: 0.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 0.9rem;
    letter-spacing: 0.25rem;
  }
`;

const scrollLineAnimation = keyframes`
0% { top: 30%;
height: 0; }

100% { top: 100%;
height: 100px;}
`;

const ScrollLine = styled.div`
  ::before {
    content: "";
    position: absolute;
    top: 30%;
    right: 50%;
    display: block;
    width: 1.5px;
    background-color: #fff;
    animation: ${scrollLineAnimation} 3.25s cubic-bezier(0.42, 0, 0.58, 1)
      infinite forwards;
    z-index: 1;
  }

  ::after {
    content: "";
    position: absolute;
    top: 30%;
    right: 50%;
    display: block;
    width: 1.5px;
    height: 250px;
    background-color: #a8a8a8;
  }
`;

export default ScrollDown;
