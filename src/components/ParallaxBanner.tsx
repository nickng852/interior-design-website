import React, { FC, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { Parallax } from "react-parallax";

interface Props {
  bgImage: string;
  title: string;
  onClick: () => void;
}

const ParallaxBanner: FC<Props> = ({ bgImage, title, onClick }) => {
  let headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(headingRef.current, {
      y: -10,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: "power3.easeOut",
    });
  }, []);

  return (
    <>
      <ParallaxImg bgImage={bgImage} bgImageAlt={title} strength={300}>
        <Wrapper>
          <ParallaxTitle>
            <p ref={headingRef}>{title}</p>
          </ParallaxTitle>
        </Wrapper>
      </ParallaxImg>

      <Arrow onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="currentColor"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Arrow>
    </>
  );
};

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
  font-family: "Jost", sans-serif;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: -0.5px;
  user-select: none;
  z-index: 2;

  p {
    font-size: 1rem;
    opacity: 0;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

    @media (min-width: 992px) {
      font-size: 1.4rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.6rem;
    }
  }
`;

const arrowAnimation = keyframes`
  0% {
    bottom: 1.5%;
  }

  30% {
    bottom: 0%;
  }

  65% {
    bottom: 1.5%;
  }

  100% {
    bottom: 1.5%;
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  transform: translate(-50%, -1.5%);
  padding: 1rem;
  color: #ffffff;
  cursor: pointer;
  animation: ${arrowAnimation} 2.75s cubic-bezier(0.42, 0, 0.58, 1) infinite
    forwards;
  transition: all 0.4s ease;

  svg {
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      width: 50px;
      height: 50px;
    }

    @media (min-width: 992px) {
      width: 60px;
      height: 60px;
    }
  }
`;

export default ParallaxBanner;
