import React, { useEffect } from "react";
import styles from "./styles";
import { connect } from "react-redux";
import { setVictoryDance } from "../../actions/robot";

const Robot = ({ isDancing, stopDancing }) => {
  useEffect(() => {
    if (isDancing) {
      setTimeout(() => stopDancing(), 2000);
    }
  }, [isDancing, stopDancing]);
  const classes = styles();
  return <div className={`${classes.robot} ${isDancing ? classes.dancing : ""}`}></div>;
};

const mapStateToProps = state => {
  const { victoryDance } = state.robot;
  return {
    isDancing: victoryDance
  };
};

const mapDispatchToProps = dispatch => ({
  stopDancing: () => dispatch(setVictoryDance(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Robot);
