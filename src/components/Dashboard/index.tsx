import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../../store/reducers/interfaces";
import * as authActions from "../../store/actions/auth";
import "./index.scss";
import { RouteChildrenProps } from "react-router";

interface DashboardProps extends RouteChildrenProps {
  logout: any;
}

const Dashboard: React.FC<DashboardProps> = ({ logout }) => {
  return (
    <div>
      <p>You are connected !</p>
      <button onClick={logout}>Logout !</button>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = {
  logout: authActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
