import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import axios from "axios";

import "./App.scss";

import { ContextProvider } from "./context/Context";
import Achievements from "./screens/Achievements/Achievements";
import Contact from "./screens/Contact/Contact";

import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import constants from "./constants/constants";

// Alert options
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  useEffect(() => {
    // Wake up the server
    axios
      .get(`${constants.BASE_URL}/wakeUp`)
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <ContextProvider>
      <Provider template={AlertTemplate} {...options}>
        <HashRouter basename="/">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/achievements" exact component={Achievements} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </HashRouter>
      </Provider>
    </ContextProvider>
  );
};

export default App;
