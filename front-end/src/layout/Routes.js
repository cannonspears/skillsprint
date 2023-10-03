import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import Splash from "./Splash";

/**
 * Defines all the routes for the application.
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route
        exact={true}
        path="/"
      >
        <Splash />
      </Route>
      <Route
        exact={true}
        path="/reservations"
      >
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
