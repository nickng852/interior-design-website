import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import emailjs from "@emailjs/browser";

import { ImFacebook2, ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current!,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            formRef.current!.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Main data-aos="fade" data-aos-duration="1000">
      <h1>Get in touch</h1>

      <SectionWrapper>
        <SocialMediaItem>
          <SocialMediaItemLink>
            <ImFacebook2 />
            <span>Facebook</span>
          </SocialMediaItemLink>

          <SocialMediaItemLink>
            <ImWhatsapp />
            <span>Whatsapp</span>
          </SocialMediaItemLink>

          <SocialMediaItemLink>
            <HiOutlineMail />
            <span>info@rnvintdesign.com</span>
          </SocialMediaItemLink>
        </SocialMediaItem>

        <Form ref={formRef} onSubmit={sendEmail}>
          <FieldGroup>
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </FieldGroup>

          <FieldGroup>
            <label>Email</label>
            <input type="text" name="email" placeholder="Your email" required />
          </FieldGroup>

          <FieldGroup>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              rows={8}
              required
            />
          </FieldGroup>

          <button type="submit">Submit</button>
        </Form>
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
  height: 100vh;
  gap: 2rem;

  h1 {
    font-family: "Jost", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    gap: 2.5rem;
  }

  @media (min-width: 992px) {
    gap: 5rem;

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    gap: 7.5rem;
  }
`;

const SectionWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }

  @media (min-width: 992px) {
    padding: 0 2rem;
    gap: 3rem;
  }

  @media (min-width: 1200px) {
    padding: 0 2.5rem;
    flex-direction: row;
    gap: 3.5rem;
  }
`;

const SocialMediaItem = styled.div`
  display: flex;
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

const SocialMediaItemLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease-out;

  span {
    font-family: "Jost", sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
  }

  &:hover {
    transform: translateX(5px);
  }

  @media (min-width: 768px) {
    span {
      font-size: 0.95rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;

  input,
  textarea,
  button {
    padding: 0.9rem 1rem;
    border: none;
    outline: none;
    background-color: #f4f4f4;
    border-radius: 8px;
    font-family: "Jost", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-family: "Jost", sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    label {
      font-size: 0.95rem;
    }
  }
`;

export default ContactPage;
