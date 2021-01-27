import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../src/components/contexts/Auth";
function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
