import React from "react";
import { Message } from "semantic-ui-react";

const ErrorMessage = props => {

  return (

    <Message negative >
      <Message.Header>Error</Message.Header>
      <p>{props.errorMessage}</p>
    </Message>
  )
};

export default ErrorMessage;
