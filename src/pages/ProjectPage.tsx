import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";

import { projects } from "../components/ProjectCardData";
import ParallaxBanner from "../components/ParallaxBanner";

const ProjectPage = () => {
  let pageRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();

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
      {projects
        .filter((project) => project.id === id)
        .map((project, index) => (
          <React.Fragment key={index}>
            <ParallaxBanner
              bgImage={project.backgroundImage}
              title={project.title}
              onClick={scrollDown}
            />

            <ProjectInfo>
              <InfoWrapper
                ref={pageRef}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="350"
              >
                <ProjectDesc>
                  <p>{project?.showcase1?.description}</p>
                </ProjectDesc>

                <ProjectImage>
                  <img src={project?.showcase1?.image} loading="lazy" />
                </ProjectImage>
              </InfoWrapper>

              <InfoWrapper
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="350"
              >
                <OverlayImageWrapper>
                  <BackImage src={project?.showcase2?.image1} />
                  <FrontImage
                    src={project?.showcase2?.image2}
                    data-aos="fade"
                    data-aos-duration="1500"
                    data-aos-delay="500"
                  />
                </OverlayImageWrapper>

                <ProjectDesc>
                  <p>{project?.showcase2?.description}</p>
                </ProjectDesc>
              </InfoWrapper>

              <ProjectBanner
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="350"
              >
                <img src={project?.showcase3?.image} loading="lazy" />
              </ProjectBanner>
            </ProjectInfo>
          </React.Fragment>
        ))}
    </Main>
  );
};

const Main = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProjectInfo = styled.div`
  padding: 2.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  gap: 4rem;

  @media (min-width: 768px) {
    padding: 3.5rem 1.5rem;
    gap: 5rem;
  }

  @media (min-width: 992px) {
    padding: 4.5rem 2rem;
    gap: 6rem;
  }

  @media (min-width: 1200px) {
    padding: 5.5 2.5rem;
    gap: 7rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

const ProjectDesc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h6 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 0.65rem;
    font-weight: 200;
    line-height: 2;
    letter-spacing: 0.5px;
  }

  @media (min-width: 768px) {
    h6 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      height: 400px;
    }
  }

  @media (min-width: 992px) {
    img {
      height: 500px;
    }
  }
`;

const OverlayImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    justify-content: start;
  }
`;

const BackImage = styled.img`
  width: 240px;
  height: 340px;

  @media (min-width: 768px) {
    width: 340px;
    height: 440px;
  }

  @media (min-width: 992px) {
    width: 440px;
    height: 540px;
  }
`;

const FrontImage = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 150px;
  height: 200px;

  @media (min-width: 768px) {
    top: 30%;
    left: 55%;
    width: 200px;
    height: 250px;
  }

  @media (min-width: 992px) {
    width: 250px;
    height: 300px;
  }

  @media (min-width: 1200px) {
    top: 30%;
    left: 45%;
    width: 300px;
    height: 350px;
  }
`;

const ProjectBanner = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProjectPage;
