import React from "react";
import styled, { keyframes } from "styled-components";

const ScrollDown = () => {
  return (
    <>
      <ScrollWrapper>
        <ScrollText>Scroll</ScrollText>
        <ScrollLine />
      </ScrollWrapper>
    </>
  );
};

const ScrollWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 2.75%;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 16rem;
  overflow: hidden;
  z-index: 2;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    height: 15rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    height: 14rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    height: 13rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    height: 12rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    height: 11rem;
  }
`;

const ScrollText = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 0.9rem;
  color: #fff;
  letter-spacing: 0.25rem;
  writing-mode: vertical-rl;
  user-select: none;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    font-size: 0.85rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    font-size: 0.8rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    font-size: 0.75rem;
    letter-spacing: 0.2rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    font-size: 0.7rem;
    letter-spacing: 0.15rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 0.65rem;
    letter-spacing: 0.1rem;
  }
`;

const scrollbar = keyframes`
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
    animation: ${scrollbar} 3.25s cubic-bezier(0.42, 0, 0.58, 1) infinite
      forwards;
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
