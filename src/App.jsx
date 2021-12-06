import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages";
import AboutPage from "./pages/about";
import "./styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap";
import HeroComp from "./components/HeroComp";
import Content from "./components/Content";

const App = () => {
  return (
    <Router>
      <div>
        <HeaderComp />
        <HeroComp />
        <Content />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
