import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineChevronUp } from "react-icons/hi";

const ScrollToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const BtnShow = () => {
    // get the viewport height of all devices
    const w = window.innerHeight;
    if (window.scrollY >= 1.5 * w) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", BtnShow);

  return (
    <>
      <ButtonWrapper showBtn={showBtn} onClick={ScrollToTop}>
        <Button />
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  position: fixed;
  right: 2.5%;
  bottom: 4.5%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f2f6;
  color: #636e72;
  border-radius: 50%;
  cursor: ${({ showBtn }) => (showBtn ? "pointer" : "default")};
  transform: ${({ showBtn }) =>
    showBtn ? "translateX(0px)" : "translateX(15px)"};
  opacity: ${({ showBtn }) => (showBtn ? "1" : "0")};
  transition: all 0.3s ease-out;
  z-index: 1;

  &:hover {
    background-color: #f6f6f6;
    transform: translateY(-8px);
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    right: 5%;
    width: 50px;
    height: 50px;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 45px;
    height: 45px;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    display: none;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
  }
`;

const Button = styled(HiOutlineChevronUp)`
  width: 24px;
  height: 24px;

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    width: 22px;
    height: 22px;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    width: 20px;
    height: 20px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 18px;
    height: 18px;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
  }
`;

export default ScrollToTopBtn;
