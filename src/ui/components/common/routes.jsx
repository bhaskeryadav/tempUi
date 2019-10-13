import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SigninForm from "ui/screen/public/signin";
import PrivateRoute from "ui/components/reusable/private.routes";
import RedboxMessages from "ui/screen/private/redbox.messages";
import { LOGIN_URL, REDBOX_MESSAGE_URL } from 'utils/constants';
import AppTemplate from 'ui/components/reusable/app.template';


export const AppRouter = props => {
  return (
    <BrowserRouter>
      <Route exact path={LOGIN_URL} component={SigninForm} />
      <PrivateRoute path={`${REDBOX_MESSAGE_URL}/:region`} component={AppTemplate} />
    </BrowserRouter>
  );
};

export default AppRouter;
