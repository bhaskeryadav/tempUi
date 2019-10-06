import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";

import BootApp from "./App";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>{children}</Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <BootApp />
  </App>,
  document.getElementById("root")
);

window.onbeforeunload = () => {
  alert("hello");
  fetch('https://6qirs.sse.codesandbox.io/bhasker').then(data=>{
    console.log(data);
  })
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
