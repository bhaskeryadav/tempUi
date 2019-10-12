import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ErrorMessage from "./ui/components/common/error";
import useHttp from "./hooks/reusable/http.hook";
import AppRouter from "./ui/components/common/routes";

export const BootApp = props => {
  const { error, sendHttpRequest } = useHttp();
  // console.log("rendiring boot app", error);

  return (
    <React.Fragment>
      {error.isError && <ErrorMessage errorMessage={error.errorMessage} />}
      <AppRouter></AppRouter>
      
    </React.Fragment>
  );
};

export default BootApp;
