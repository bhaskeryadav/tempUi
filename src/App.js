import React, { useEffect } from "react";
import ErrorMessage from "./ui/components/common/error";
import useGlobalStore from "./hooks/reusable/global.hook";
import AppRouter from "./ui/components/common/routes";

export const BootApp = props => {
  const { error, sendHttpRequest } = useGlobalStore();
  console.log("rendiring boot app", error);

  return (
    <React.Fragment>
      {error.isError && <ErrorMessage errorMessage={error.errorMessage} />}
      <AppRouter>

      </AppRouter>
    </React.Fragment>
  );
};

export default BootApp;
