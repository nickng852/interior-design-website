import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/styles/GlobalStyle";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { projects } from "./components/ProjectCardData";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/buttons/ScrollToTopButton";

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} onClick={handleToggle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/project/:id"
          element={<ProjectPage projects={projects} />}
        />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
