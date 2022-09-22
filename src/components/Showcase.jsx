import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "../components/styles/_showcase.scss";
import "./ShowcaseData";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-fade/effect-fade.scss";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

const Showcase = ({ images }) => {
  useEffect(() => {
    Aos.init({ once: "true" });
  }, []);

  return (
    <>
      <Body>
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          Showcase
        </SectionTitle>
        <Swiper
          spaceBetween={0}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          data-aos="fade"
          data-aos-duration="1000"
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 2,
            },
            // when window width is >= 1600px
            1600: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperImg src={image.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Body>
    </>
  );
};

const Body = styled.section`
  margin: 8rem auto;

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

const SwiperImg = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    height: 40rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    height: 35rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    height: 30rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    height: 17.5rem;
  }
`;

export default Showcase;
