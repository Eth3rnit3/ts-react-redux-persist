import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { StoreState, AuthState } from "../store/reducers/interfaces";
import LoginForm from "../components/LoginForm";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";

interface Props {
  auth: AuthState;
}

const Router: React.FC<Props> = ({ auth }) => {
  return (
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute
        isConnected={auth.isConnected}
        path="/dashboard"
        component={Dashboard}
      />
    </Switch>
  );
};

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
