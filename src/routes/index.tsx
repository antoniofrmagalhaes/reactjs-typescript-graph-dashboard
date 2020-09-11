import React from "react";
import { Switch } from "react-router-dom";
import Route from "../routes/DashboardRoute";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>dashboard</h1>} />
      <Route path="/informations" component={() => <h1>informations</h1>} />
      <Route path="/desktops" component={() => <h1>desktops</h1>} />
      <Route path="/orders" component={() => <h1>orders</h1>} />
      <Route path="/settings" component={() => <h1>settings</h1>} />
    </Switch>
  );
};

export default Routes;
