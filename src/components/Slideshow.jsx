import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// import GSAP
import { TweenMax, Power3 } from "gsap";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-fade/effect-fade.scss";

// install Swiper modules
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);

const Slideshow = ({ slides }) => {
  let heading1 = useRef(null);
  let heading2 = useRef(null);

  useEffect(() => {
    TweenMax.to(heading1, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.5,
    });
    TweenMax.to(heading2, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1,
    });
  }, []);

  return (
    <>
      <SwiperHeading>
        <h2
          ref={(el) => {
            heading1 = el;
          }}
        >
          new basic
        </h2>
        <h2
          ref={(el) => {
            heading2 = el;
          }}
        >
          for new culture.
        </h2>
      </SwiperHeading>
      <Swiper
        effect="fade"
        autoplay={{ delay: 2000 }}
        speed={2500}
        allowTouchMove={false}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} onContextMenu={(e) => e.preventDefault()}>
              <SwiperImg src={slide.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const SwiperHeading = styled.div`
  position: absolute;
  top: 47.5%;
  left: 50%;
  transform: translate(-50%, -47.5%);
  font-family: "Playfair Display", serif;
  color: #ffffff;
  text-align: center;
  user-select: none;
  z-index: 2;

  h2 {
    font-size: 1.8rem;
    opacity: 0;

    // X-Large devices (large desktops, less than 1400px)
    @media (max-width: 1399.98px) {
      font-size: 1.5rem;
    }

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) {
      font-size: 1.4rem;
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
      font-size: 1.3rem;
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
      font-size: 1.2rem;
    }

    // X-Small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
      font-size: 1.1rem;
    }
  }
`;

const SwiperImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export default Slideshow;
