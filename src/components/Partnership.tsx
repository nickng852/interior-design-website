import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";

type ILogos = {
  id: string;
  image: string;
}[];

interface Props {
  logos: ILogos;
}

const Partnership: FC<Props> = ({ logos }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <Main>
      <Wrapper>
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          <p>Partnered with</p>
        </SectionTitle>

        <LogoWrapper
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {logos.map((logo) => {
            return <Logo key={logo.id} src={logo.image} />;
          })}
        </LogoWrapper>
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 220px;
  }

  @media (min-width: 992px) {
    width: 240px;
  }

  @media (min-width: 1200px) {
    width: 260px;
  }
`;

export default Partnership;
