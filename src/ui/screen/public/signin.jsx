import React, {  useCallback, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { ssoServer, POST, REDBOX_MESSAGE_URL, AUTH_TOKEN, REDBOX_MESSAGE_SETTING, MESSAGE_SETTING_KEY } from "utils/constants";
import useHttp from "hooks/reusable/http.hook";
import { withRouter } from "react-router-dom";
import useGlobalStore from "hooks/reusable/global.store/global.hook";
import { SET_REDBOX_MESSAGE_SETTING } from "hooks/reusable/global.store/global.hook.constants";

var refreshIntervalId;

const SigninForm = props => {
  const { sendHttpRequest } = useHttp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(() => {
    console.log(email, `${ssoServer}/users/login`);
    sendHttpRequest({
      url: `${ssoServer}/users/login`,
      requestData: {
        email: "snj.db1@gmail.com",
        password: "123456",
        role: 2,
        fingerprint: window["fingerprint"],
        page: "messages"
      },
      method: POST,
      successCallback: data => {
        // Implement in a seprate file
        const { [`${AUTH_TOKEN}`]: token, usr_email: email, refreshToken } = data;
        console.log("data returned", token, email);
        localStorage.setItem(AUTH_TOKEN, token);
        localStorage.setItem(MESSAGE_SETTING_KEY, REDBOX_MESSAGE_SETTING[`${data.region}`]);
        // executeActions(SET_REDBOX_MESSAGE_SETTING, REDBOX_MESSAGE_SETTING[`${data.region}`])
        props.history.push(`${REDBOX_MESSAGE_URL}/${data.region}`);
        refreshIntervalId = setInterval(() => {
          sendHttpRequest({
            url: `${ssoServer}/users/token`,
            requestData: {
              refreshtoken: refreshToken,
              email: email
            },
            method: POST,
            successCallback: (res) => {
              console.log('refresh token', res.token);
            }
          });
        }, 50000);
      },
      errorCallback: error => {
        console.log("error returned", error);
      }
    });
  }, []);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={"snj.db1@gmail.com"}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={"123456"}
            />

            <Button color="teal" fluid size="large" onClick={() => login()}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(SigninForm);
