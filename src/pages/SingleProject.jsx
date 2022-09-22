import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavbarDark from "../components/NavbarDark";
import ParallaxHero from "../components/ParallaxHero";
import { Button } from "../components/buttons/ActionButton";

//import the AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

const SingleProject = ({ projects, open, setOpen, navbar, setNavbar }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { id } = useParams();

  return (
    <>
      <NavbarDark
        open={open}
        setOpen={setOpen}
        navbar={navbar}
        setNavbar={setNavbar}
      />
      <ParallaxHero />
      <Body>
        {projects
          .filter((project) => project.id === id)
          .map((project) => (
            <>
              <Wrapper>
                <Row data-aos="fade" data-aos-duration="750">
                  <Col xs={{ span: 12 }} xl={{ span: 7 }}>
                    <ProjectImg>
                      <img
                        src={project.showcaseImage2}
                        alt=""
                        className="top-img"
                      />
                    </ProjectImg>
                  </Col>
                  <Col
                    xs={{ span: 12 }}
                    xl={{ span: 5 }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <ProjectDesc>
                      <ProjectTag>RESIDENTIAL</ProjectTag>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDetail>{project.description}</ProjectDetail>
                    </ProjectDesc>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} xl={4} className="d-flex align-items-center">
                    <div>
                      <ProjectTag>
                        LATEST WORK<Line></Line>
                      </ProjectTag>
                      <Button>VIEW MORE</Button>
                    </div>
                  </Col>
                  <Col xs={12} xl={4}>
                    <ProjectImg
                      data-aos="fade"
                      data-aos-duration="700"
                      data-aos-delay="200"
                    >
                      <img
                        src={project.showcaseImage3}
                        alt=""
                        className="styled-img-up"
                      />
                    </ProjectImg>
                  </Col>
                  <Col xs={12} xl={4}>
                    <ProjectImg
                      data-aos="fade"
                      data-aos-duration="700"
                      data-aos-delay="400"
                    >
                      <img
                        src={project.showcaseImage4}
                        alt=""
                        className="styled-img-down"
                      />
                    </ProjectImg>
                  </Col>
                </Row>
              </Wrapper>
            </>
          ))}
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35.5rem;

  @media (max-width: 992px) {
    margin-top: 20rem;
  }

  @media (max-width: 768px) {
    margin-top: 12rem;
  }
`;

const Wrapper = styled(Container)`
  @media (min-width: 1400px) {
    max-width: 1440px;
  }
`;

const ProjectDesc = styled.div`
  @media (max-width: 1200px) {
    margin-top: -5rem;
    text-align: center;
  }
`;

const ProjectTag = styled.p`
  color: #747d8c;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  position: relative;
`;

const Line = styled.div`
  ::before {
    content: "";
    display: block;
    width: 15rem;
    height: 1px;
    background-color: #747d8c;
    position: absolute;
    top: 7.5px;
    right: -150px;
  }
`;

const ProjectTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 200;
`;

const ProjectDetail = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 1.075rem;
  font-weight: 200;
  margin-top: 2.5rem;
`;

const ProjectImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & .top-img {
    width: 100%;
    height: 45rem;
    object-fit: contain;

    @media (max-width: 1200px) {
      margin-bottom: 4rem;
    }
  }

  & .styled-img-up {
    width: 100%;
    height: 35rem;
    object-fit: cover;

    @media (max-width: 1200px) {
      width: 100%;
      margin-top: 8rem;
    }

    @media (max-width: 768px) {
      margin-top: 5rem;
    }
  }

  & .styled-img-down {
    width: 100%;
    height: 35rem;
    object-fit: cover;

    @media (max-width: 1200px) {
      width: 100%;
      margin-top: 8rem;
    }

    @media (max-width: 992px) {
      margin-top: 5rem;
    }

    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }
`;

export default SingleProject;
