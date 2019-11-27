import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState, AuthState } from "../../store/reducers/interfaces";
import * as authActions from "../../store/actions/auth";
import "./index.scss";
import { RouteChildrenProps } from "react-router";

interface LoginFormProps extends RouteChildrenProps {
  login: any;
  auth: AuthState;
}

const LoginForm: React.FC<LoginFormProps> = ({ login, auth, history }) => {
  useEffect(() => {
    if (auth.isConnected) {
      history.push("/dashboard");
    }
  }, [auth.isConnected]);
  return (
    <div>
      <p>You are in login form</p>
      <button onClick={() => login({ token: "www-token" })}>Login me !</button>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login: authActions.login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
