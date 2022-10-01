import React, { FC, useState } from "react";
import styled from "styled-components";
import { HiOutlineChevronUp } from "react-icons/hi";

interface Props {
  showBtn?: boolean;
  onClick?: () => void;
}

const ScrollToTopBtn: FC<Props> = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const btnShow = () => {
    const w = window.innerHeight;

    if (window.scrollY >= 1.5 * w) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", btnShow);

  return (
    <Button showBtn={showBtn} onClick={scrollToTop}>
      <HiOutlineChevronUp />
    </Button>
  );
};

const Button = styled.div<Props>`
  display: none;

  @media (min-width: 768px) {
    position: fixed;
    bottom: 4%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background-color: #f1f2f6;
    color: #636e72;
    border-radius: 50%;
    cursor: ${({ showBtn }) => (showBtn ? "pointer" : "default")};
    transform: ${({ showBtn }) =>
      showBtn ? "translateX(0px)" : "translateX(15px)"};
    opacity: ${({ showBtn }) => (showBtn ? "1" : "0")};
    transition: all 0.3s ease-out;
    z-index: 1;
  }

  &:hover {
    background-color: #f6f6f6;
    transform: translateY(-8px);
  }

  @media (min-width: 992px) {
    bottom: 4.5%;
    right: 4%;
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1200px) {
    bottom: 5%;
    right: 3%;
    width: 55px;
    height: 55px;
  }
`;

export default ScrollToTopBtn;
