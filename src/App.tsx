import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./components/styles/GlobalStyle";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/buttons/ScrollToTopButton";

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />

      <Navbar toggle={toggle} onClick={handleToggle} />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <Footer />

      <ScrollToTopButton />
    </Router>
  );
};

export default App;
