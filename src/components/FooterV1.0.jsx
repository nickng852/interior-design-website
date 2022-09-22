import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <Nav>
        <Container>
          <Row>
            <Col md={4}>
              <NavItem>
                <CompanyTitle>
                  Renovate <span>Interior Design</span>
                </CompanyTitle>
                <CompanyDesc></CompanyDesc>
              </NavItem>
            </Col>
            <Col md={4}>
              <NavItem>
                <NavItemTitle>Site Map</NavItemTitle>
                <Link to="/">
                  <NavItemLink>Home</NavItemLink>
                </Link>
                <Link to="/about">
                  <NavItemLink>About</NavItemLink>
                </Link>
                <Link to="/service">
                  <NavItemLink>Service</NavItemLink>
                </Link>
                <Link to="/jobreference">
                  <NavItemLink>Project</NavItemLink>
                </Link>
                <Link to="/contact">
                  <NavItemLink>Contact</NavItemLink>
                </Link>
              </NavItem>
            </Col>
            <Col md={4}>
              <NavItem>
                <NavItemTitle>Contact Us</NavItemTitle>
                <NavItemLink>
                  <FaceBookIcon />
                  <span>Facebook</span>
                </NavItemLink>
                <NavItemLink>
                  <WhatsappIcon />
                  <span>Whatsapp</span>
                </NavItemLink>
                <NavItemLink>
                  <EmailIcon />
                  <span>info@rnvintdesign.com</span>
                </NavItemLink>
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Nav>
      <Credit>© Renovate Interior Design | All rights reserved.</Credit>
    </>
  );
};

const Nav = styled.footer`
  padding: 5rem 1rem 0.5rem 1rem;
  background-color: #232d35;
`;

const CompanyTitle = styled.h1`
  margin-bottom: 2rem;
  font-family: "Jost", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  span {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const CompanyDesc = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  text-align: justify;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  color: #fff;
  text-align: left;
`;

const NavItemTitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: "Jost", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
`;

const NavItemLink = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.3s ease-out;

  span {
    margin: auto 0 auto 0.5rem;
    font-family: "QuickSand", sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: translateX(5px);
  }
`;

const FaceBookIcon = styled(ImFacebook2)`
  font-size: 1.3rem;
`;

const WhatsappIcon = styled(ImWhatsapp)`
  font-size: 1.3rem;
`;

const EmailIcon = styled(HiOutlineMail)`
  font-size: 1.3rem;
`;

const Credit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 0.75rem;
  background-color: #1d262d;
  color: rgba(255, 255, 255, 1);
  font-size: 0.9rem;
  font-weight: 300;
`;

export default Footer;
