import React from "react";

import {
  Route,
  RouteProps as ReactRouterDomRouteProps,
} from "react-router-dom";

import DashboardLayout from "../pages/_layouts/Dashboard";

interface RouteProps extends ReactRouterDomRouteProps {
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component />
        </DashboardLayout>
      )}
    />
  );
};

export default RouteWrapper;
