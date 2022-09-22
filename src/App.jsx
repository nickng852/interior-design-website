import React, { useState } from "react";

// React Router Setup
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Adding Components
import ScrollToTop from "./components/functions/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import SingleProject from "./pages/SingleProject";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/buttons/ScrollToTopButton";
import { project } from "./components/ProjectCardData";

const App = () => {
  // States
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Home
              open={open}
              setOpen={setOpen}
              navbar={navbar}
              setNavbar={setNavbar}
            />
          </Route>
          <Route path="/about">
            <About
              open={open}
              setOpen={setOpen}
              navbar={navbar}
              setNavbar={setNavbar}
            />
          </Route>
          <Route path="/service">
            <Service
              open={open}
              setOpen={setOpen}
              navbar={navbar}
              setNavbar={setNavbar}
            />
          </Route>
          <Route path="/project/:id">
            <SingleProject
              open={open}
              setOpen={setOpen}
              navbar={navbar}
              setNavbar={setNavbar}
              projects={project}
              showcaseImages={project}
            />
          </Route>
          <Route path="/contact">
            <Contact
              open={open}
              setOpen={setOpen}
              navbar={navbar}
              setNavbar={setNavbar}
            />
          </Route>
        </Switch>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </>
  );
};

export default App;
