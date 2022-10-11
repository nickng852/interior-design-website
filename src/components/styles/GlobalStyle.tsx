import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: "Quicksand", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.logo-active {
  color: #353b48 !important;
}

.control-active {
   ::before,
    ::after {
      background-color: #353b48 !important;
    }
}

// Swiper Styles
.swiper-pagination-bullet {
  background-color: #0d0d0d;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
  opacity: 1;
}

.swiper-button-prev {
  display: none;

  @media (min-width: 1200px) {
    position: absolute;
    top: 50%;
    left: 0;
    padding: 100% 5% 100% 2%;
    display: block;
    color: #fff;
    transform: translateY(-50%);
    opacity: 0;
    transition: all ease 0.2s;

    &:hover {
      opacity: 1;
    }
  }
}

.swiper-button-next {
  display: none;

  @media (min-width: 1200px) {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 100% 2% 100% 5%;
    display: block;
    color: #fff;
    transform: translateY(-50%);
    opacity: 0;
    transition: all ease 0.2s;

    &:hover {
      opacity: 1;
    }
  }
}

`;

export default GlobalStyle;
