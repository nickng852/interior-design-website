import React from "react";
import styled from "styled-components";

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

const SingleProjectSlider = ({ projects }) => {
  return (
    <>
      <Swiper effect="fade" autoplay={{ delay: 4000 }} speed={2500}>
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <SwiperImg src={project.showcaseImage.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const SwiperImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-color: black;
`;

export default SingleProjectSlider;
