import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./App.scss";

import { ContextProvider } from "./context/Context";
import Achievements from "./screens/Achievements/Achievements";
import Contact from "./screens/Contact/Contact";

import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";

// Alert options
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
    <ContextProvider>
      <Provider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/achievements" exact component={Achievements} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ContextProvider>
  );
};

export default App;
