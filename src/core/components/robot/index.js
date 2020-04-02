import React from "react";
import styles from "./styles";
import { connect } from "react-redux";

const Robot = ({ isDancing }) => {
  const classes = styles();
  return <div className={`${classes.robot} ${isDancing ? classes.dancing : ""}`}></div>;
};

const mapStateToProps = state => {
  const { victoryDance } = state.robot;
  return {
    isDancing: victoryDance
  };
};

export default connect(mapStateToProps)(Robot);
