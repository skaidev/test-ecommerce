import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages";
import AboutPage from "./pages/about";
import "./styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <Router>
      <div>
        <HeaderComp />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
