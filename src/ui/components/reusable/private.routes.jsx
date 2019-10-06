import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGIN_URL, AUTH_TOKEN } from 'utils/constants'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem(AUTH_TOKEN) ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: `${LOGIN_URL}`
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;
