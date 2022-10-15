import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";

import { IProjects } from "../interfaces/project";

const ProjectCard: FC<IProjects> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <Main>
      <Wrapper>
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          <p>Projects</p>
        </SectionTitle>

        <CardWrapper>
          {projects.map((project, index) => {
            return (
              <Card key={index} data-aos="fade-up" data-aos-duration="1000">
                <Link to={`/project/${project.id}`}>
                  <CardImgWrapper>
                    <CardImg src={project.thumbnailImage} loading="lazy" />
                    <CardOverlay
                      data-aos="fade-right"
                      data-aos-duration="1250"
                      data-aos-delay="350"
                    >
                      {project.title}
                    </CardOverlay>
                  </CardImgWrapper>
                </Link>
              </Card>
            );
          })}
        </CardWrapper>
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
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1500px;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 2.5rem 1rem;
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    padding: 3rem 1rem;
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 3.5rem 1rem;
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

const CardWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.2rem;
    grid-template-columns: repeat(2, 2fr);
  }

  @media (min-width: 992px) {
    gap: 1.4rem;
    grid-template-columns: repeat(2, 2fr);
  }

  @media (min-width: 1200px) {
    gap: 1.6rem;
    grid-template-columns: repeat(3, 3fr);
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
`;

const CardImgWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    height: 16rem;
  }

  @media (min-width: 992px) {
    height: 20rem;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.9rem 1rem;
  font-family: "Poppins", san-serif;
  font-size: 0.7rem;
  color: #f1f2f6;

  @media (min-width: 768px) {
    padding: 1.2rem 1.3rem;
    font-size: 0.8rem;
  }
`;

export default ProjectCard;
