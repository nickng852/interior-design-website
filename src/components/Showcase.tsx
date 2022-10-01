import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

type IImages = {
  id: string;
  image: string;
}[];

interface Props {
  images: IImages;
}

const Showcase: FC<Props> = ({ images }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <Main>
      <Wrapper>
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          <p>Showcase</p>
        </SectionTitle>

        <SwiperWrapper data-aos="fade" data-aos-duration="1000">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000 }}
            navigation
            pagination={{ clickable: false, dynamicBullets: true }}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
              1600: {
                slidesPerView: 3,
              },
            }}
            loop={true}
          >
            {images.map((image) => {
              return (
                <SwiperSlide key={image.id}>
                  <SwiperImg src={image.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperWrapper>
      </Wrapper>
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }

  @media (min-width: 992px) {
    padding: 3rem 0;
  }

  @media (min-width: 1200px) {
    padding: 3.5rem 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    gap: 2.5rem;
  }
`;

const SectionTitle = styled.div`
  width: 100%;

  p {
    font-family: "Playfair Display", serif;
    font-size: 0.9rem;
    color: #353b48;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    @media (min-width: 992px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.2rem;
    }
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
`;

const SwiperImg = styled.img`
  width: 100%;
  height: 16.5rem;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 25rem;
  }

  @media (min-width: 992px) {
    height: 30rem;
  }

  @media (min-width: 1200px) {
    height: 35rem;
  }
`;

export default Showcase;
