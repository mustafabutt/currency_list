import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {HomeComponent} from "./components/homeContainer";

export const Routes = () => (
    <Router>
      <Switch >
          <Route exact path="/" component={HomeComponent}   />
      </Switch>
    </Router>
);
