import React, { FC, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// import Swiper core and required modules
import { Autoplay, EffectFade } from "swiper";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { gsap } from "gsap";

import ScrollDown from "../components/ScrollDown";

type ISlides = {
  id: string;
  image: string;
}[];

interface Props {
  slides: ISlides;
}

const Slideshow: FC<Props> = ({ slides }) => {
  let heading1 = useRef(null);
  let heading2 = useRef(null);

  useEffect(() => {
    gsap.to(heading1.current, {
      y: -20,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power3.easeOut",
    });

    gsap.to(heading2.current, {
      y: -10,
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "power3.easeOut",
    });
  }, []);

  return (
    <Main>
      <SwiperText>
        <p ref={heading1}>new basic</p>
        <p ref={heading2}>for new culture.</p>
      </SwiperText>

      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect={"fade"}
        speed={2000}
        allowTouchMove={false}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperImg src={slide.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ScrollDown />
    </Main>
  );
};

const Main = styled.section`
  width: 100%;
  height: 100vh;
`;

const SwiperText = styled.div`
  position: absolute;
  top: 47.5%;
  left: 50%;
  transform: translate(-50%, -47.5%);
  font-family: "Playfair Display", serif;
  color: #ffffff;
  text-align: center;
  user-select: none;
  z-index: 2;

  p {
    font-size: 1.1rem;
    opacity: 0;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

    @media (min-width: 992px) {
      font-size: 1.3rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.4rem;
    }
  }
`;

const slideZoom = keyframes`
0% {
  transform: scale(1.1);
}
50% { 
  transform: scale(1);
}
100% {
  transform: scale(1.1);
}
`;

const SwiperImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transform: scale(1.1);
  animation: ${slideZoom} 21s cubic-bezier(0.42, 0, 0.58, 1) infinite forwards;
  animation-delay: 2s;
`;

export default Slideshow;
