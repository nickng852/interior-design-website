import React, { useEffect } from "react";
import styled from "styled-components";
import NavbarDark from "../components/NavbarDark";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ navbar, setNavbar, open, setOpen }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92k81dj",
        "template_541fu8r",
        e.target,
        "user_ZuIhUAVFMg6A7aOBkMYX9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Body>
        <NavbarDark
          open={open}
          setOpen={setOpen}
          navbar={navbar}
          setNavbar={setNavbar}
        />
        <Container>
          <Row data-aos="fade" data-aos-duration="1500">
            <Col>
              <h2>General Enquiry</h2>
              <SocialMediaItem>
                <SocialMediaItemLink>
                  <FaceBookIcon />
                  <span>Facebook</span>
                </SocialMediaItemLink>
                <SocialMediaItemLink>
                  <WhatsappIcon />
                  <span>Whatsapp</span>
                </SocialMediaItemLink>
                <SocialMediaItemLink>
                  <EmailIcon />
                  <span>info@rnvintdesign.com</span>
                </SocialMediaItemLink>
              </SocialMediaItem>
            </Col>
            <Col>
              <Form onSubmit={sendEmail}>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control name="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={8} name="message" />
                  <Form.Text className="text-muted">
                    The information you provide is for our contact purposes
                    only.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
};

const Body = styled.div`
  min-height: 100vh;
  padding: 10rem 0;
  color: #001833;

  @media (max-width: 992px) {
    height: 80vh;
  }

  @media (max-width: 576px) {
    height: 85vh;
  }
`;

const SocialMediaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  color: #001833;
  text-align: left;

  @media (max-width: 576px) {
    width: 500px;
  }
`;

const SocialMediaItemLink = styled.a`
  display: flex;
  margin-bottom: 2rem;
  color: #001833;
  font-size: 1rem;
  transition: all 0.3s ease-out;

  span {
    margin: auto 0 auto 0.75rem;
    font-family: "QuickSand", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  &:hover {
    color: #001833;
    transform: translateX(5px);
  }
`;

const FaceBookIcon = styled(ImFacebook2)`
  color: #4267b2;
  font-size: 1.5rem;
`;

const WhatsappIcon = styled(ImWhatsapp)`
  color: #128c7e;
  font-size: 1.5rem;
`;

const EmailIcon = styled(HiOutlineMail)`
  color: #57606f;
  font-size: 1.5rem;
`;

export default Contact;
