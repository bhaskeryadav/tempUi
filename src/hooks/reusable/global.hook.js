import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { GET, POST, AUTH_TOKEN } from "utils/constants";

const initialState = { isError: false, errorMessage: "" };
var listeners = [];

const httpCallMethods = {
  [`${POST}`]: (url, requestData, requestHeaders) =>
    axios.post(url, { ...requestData }, requestHeaders),
  [`${GET}`]: (url, requestData, requestHeaders) =>
    axios.get(url, requestHeaders)
};

const broadcastError = error =>
  listeners.forEach(li =>
    li(p => ({ isError: true, errorMessage: error.message }))
  );

const useGlobalStore = () => {
  const [error, setError] = useState(initialState);
  // console.log("In Global Store");

  useEffect(() => {
    listeners.push(setError);

    return () => {
      listeners = listeners.filter(li => li !== setError);
    };
  }, []);

  const sendHttpRequest = useCallback(
    ({ url, method, requestData, successCallback, errorCallBack, meta }) => {
      console.log(`${AUTH_TOKEN}`, localStorage.getItem(AUTH_TOKEN), url);
      let header = {
        headers: {
          "Content-Type": "application/json",
          from: "app",
          "x-auth": localStorage.getItem(AUTH_TOKEN)
        }
      };
      httpCallMethods[method](url, requestData, header)
        .then(response => {
          // console.log("response", response.data);
          successCallback && successCallback(response.data, meta);
        })
        .catch(function (error) {
          const message = error.message;
          console.log(message);
          broadcastError(error);
          errorCallBack && errorCallBack(error, meta);
        });
    },
    []
  );

  return { sendHttpRequest, error };
};

export default useGlobalStore;
