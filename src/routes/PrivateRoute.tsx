import React, { ReactElement } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  isConnected: boolean;
  component: any;
}

export default function PrivateRoute({
  component: Component,
  isConnected,
  ...rest
}: PrivateRouteProps): ReactElement {
  return (
    <Route
      {...rest}
      render={props =>
        isConnected === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
