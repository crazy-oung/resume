import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import Navigation from "./components/Shared/Navigation/Navigation";
import Footer from "./components/Shared/Footer/Footer";
import IndexPage from "./pages/IndexPage/IndexPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/projects" component={ProjectPage} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
