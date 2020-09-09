import React from "react";
import { Switch } from "react-router-dom";
import Route from "../routes/DashboardRoute";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Dashboard</h1>} />
    </Switch>
  );
};

export default Routes;
