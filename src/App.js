import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Helpers from "./functions/functions-common";

import './css/global.scss';

import * as Components from "./components/components-common";
import * as Scene from "./components/scenes/scene-common";
import * as Routes from "./routes/routes-common";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  Helpers.GetWindowSize(setWidth, setHeight);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={Routes.Frontend.home}>
            <Components.SiteHelmet title="Landing"/>
            <Scene.LandingScene width={width} height={height}/>
          </Route>
          <Route path={Routes.Frontend.lottieDemo}>
            <Components.SiteHelmet title="Lottie Demo"/>
            <Scene.LottieDemoScene/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
