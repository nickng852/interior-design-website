import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Aos from "aos";

const ProjectCard = ({ projects }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
      <Body fluid="xl">
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          Projects
        </SectionTitle>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col
                key={index}
                lg={6}
                xl={4}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Card to={`/project/${project.id}`}>
                  <CardImgWrapper>
                    <CardImg src={project.thumbnailImage} />
                    <CardOverlay
                      data-aos="fade-right"
                      data-aos-duration="1250"
                      data-aos-delay="350"
                    >
                      {project.title}
                    </CardOverlay>
                  </CardImgWrapper>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Body>
    </>
  );
};

const Body = styled(Container)`
  margin: 8rem auto;
  max-width: 1500px;

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
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: #353b48;
  text-align: center;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    font-size: 1.2rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    font-size: 1.15rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    font-size: 1.1rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    font-size: 1.05rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 1rem;
  }
`;

const Card = styled(Link)``;

const CardImgWrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  overflow: hidden;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    margin-top: 4rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    margin-top: 3.5rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    margin-top: 3rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin-top: 2.5rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin-top: 2rem;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    height: 17.5rem;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    height: 22.5rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    height: 30rem;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    height: 25rem;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    height: 12.5rem;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1.25rem 1.35rem;
  font-family: "Poppins", san-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #f1f2f6;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin: 0.65rem 0.75rem;
    font-size: 0.65rem;
    font-weight: 400;
  }
`;

export default ProjectCard;
