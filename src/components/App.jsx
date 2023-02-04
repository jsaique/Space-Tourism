import React from "react";
import { Route } from "react-router-dom";
// Components
import NavbarComponent from "./navbar";
import HomeComponent from "./home";
import DestinationComponent from "./destination";
import CrewComponent from "./crew";
import TechnologyComponent from "./technology";

const App = () => {
  return (
    <div className="menu">
      <NavbarComponent />
      <Route exact path="/">
        <HomeComponent />
      </Route>
      <Route path="/destination">
        <DestinationComponent />
      </Route>
      <Route path="/crew">
        <CrewComponent />
      </Route>
      <Route path="/technology">
        <TechnologyComponent />
      </Route>
    </div>
  );
};

export default App;
