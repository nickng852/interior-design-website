import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";

import ParallaxBanner from "../components/ParallaxBanner";
import { ActionButton } from "../components/buttons/ActionButton";

import bgImage from "../assets/images/Parallax.jpg";
import bannerImage from "../assets/images/pexels-max-vakhtbovych-6782579 (1).jpg";

const AboutPage = () => {
  let pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const scrollDown = () => {
    pageRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Main>
      <ParallaxBanner bgImage={bgImage} title="About" onClick={scrollDown} />

      <SectionWrapper
        ref={pageRef}
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <Title>
          <h1>Renovate Interior Design</h1>
          <Line />
        </Title>

        <ContentWrapper>
          <DescWrapper>
            <Desc>
              Our mission is to create environments that deliver on every level.
              Aesthetic, practical, commercial, experiential. We achieve this by
              applying intelligence to design. By developing a personal vision
              for every project, setting the most uncompromising standards and
              working side by side with our clients to bring that vision to
              life. It’s an approach that has cemented our reputation as
              world-class designers of luxury hotels, resorts and private
              residences. Our vision is ambitious, far-ranging and constantly
              innovating. Guided by clear style principles yet unfettered by a
              house ‘style’, we always see beyond the bounds of a brief to
              discover surprising and inspiring possibilities. Our spaces are
              transformative. By going beyond trend we design environments that
              are original and timeless and which spark all the senses. We
              understand the ultimate essence of a project, which unlocks the
              authentic design story. The result is a unique, immersive
              experience that is exactly right for the place and the people
              within it. Our work is underpinned by a rich depth of insight and
              experience – from architectural principles to aesthetic, function
              and cultural sensibility. This intelligent approach to design
              shapes every decision we make and every space we create.
            </Desc>

            <Desc>
              We take great pride in going further and thinking deeper.
              Materials, finish, texture and craftsmanship – we are
              uncompromising in the standards we set ourselves and it shows in
              the results we can achieve for our clients. We recognise the
              importance of striking the balance between commercial demands and
              creative ambitions. Our unrivalled experience, profound grasp of
              commercial needs and creative agility, mean we reach inspired
              solutions for our clients, without compromise.
            </Desc>

            <Desc>
              When we work together, exciting things happen. On every project,
              we collaborate with our clients and with each other to arrive at a
              unique and tailored solution. It elevates every project beyond
              even the greatest individual conception. It’s the best and most
              enjoyable way we know of bringing our vision to life.
            </Desc>
          </DescWrapper>

          <img src={bannerImage} />
        </ContentWrapper>

        <Link to="/contact">
          <ActionButton>Contact Us</ActionButton>
        </Link>
      </SectionWrapper>
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SectionWrapper = styled.div`
  padding: 2.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 3.5rem 1.5rem;
    gap: 2.5rem;
  }

  @media (min-width: 992px) {
    padding: 4.5rem 2rem;
    gap: 3rem;
  }

  @media (min-width: 1200px) {
    padding: 5.5 2.5rem;
    gap: 3.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
    font-size: 1rem;
    font-weight: 300;
  }

  @media (min-width: 992px) {
    gap: 1.5rem;

    h1 {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1200px) {
    gap: 2rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Line = styled.div`
  ::before {
    content: "";
    display: block;
    width: 7.5rem;
    height: 0.5px;
    background-color: #747d8c;

    @media (min-width: 1200px) {
      width: 10rem;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    gap: 2.5rem;
  }

  @media (min-width: 992px) {
    gap: 3rem;
  }

  @media (min-width: 1200px) {
    gap: 3.5rem;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 1.8rem;

  @media (min-width: 1200px) {
    gap: 2rem;
  }
`;

const Desc = styled.div`
  width: 100%;
  font-size: 0.7rem;
  font-weight: 200;
  letter-spacing: 0.5px;
  line-height: 1.75;
  text-align: justify;

  @media (min-width: 768px) {
    line-height: 2;
    font-size: 0.75rem;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
  }
`;

export default AboutPage;
