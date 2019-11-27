import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../store/reducers/interfaces";

interface TemplateProps {}

const Template: React.FC<TemplateProps> = () => {
  return <div></div>;
};

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
