import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: auto !important;
}

html, body {
  width: 100%;
  overflow-x: hidden;
  font-family: "Quicksand", sans-serif;
}

a {
  text-decoration: none;
}

// Nav Styles - Change the color of logo and HamburgerBtn when the HamburgerBtn is clicked
.logo-active {
  color: #353b48 !important;
}

.hamburger-active {
  ::before, ::after{
  background-color: #353b48 !important;
}
}

`;

export default GlobalStyle;
