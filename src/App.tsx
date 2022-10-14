import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import GlobalStyle from "./components/styles/GlobalStyle";
import ScrollToTop from "./components/ScrollTopTop";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTopButton from "./components/buttons/ScrollToTopButton";
import Footer from "./components/Footer";

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <ParallaxProvider>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar toggle={toggle} onClick={handleToggle} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <ScrollToTopButton />
        <Footer />
      </ParallaxProvider>
    </Router>
  );
};

export default App;
