import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <h1>Dashboard</h1>} />
    </Switch>
  );
};

export default Routes;
