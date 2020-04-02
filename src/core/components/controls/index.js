import React, { useState } from "react";
import { connect } from "react-redux";
import { moveRobot, setPosition } from "../../actions/robot";
import styles from "./styles";

const Controls = ({ robotPosition, move, setPosition }) => {
  const classes = styles();
  const { x, y } = robotPosition || {};

  const [positionX, setPositionX] = useState(1);
  const [positionY, setPositionY] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.statusBar}>
        Status - X: {x + 1 || 0} Y: {y + 1 || 0}
      </div>
      <div>
        <button className={classes.button} onClick={() => move("up")}>
          Up
        </button>
        <button className={classes.button} onClick={() => move("down")}>
          Down
        </button>
        <button className={classes.button} onClick={() => move("left")}>
          Left
        </button>
        <button className={classes.button} onClick={() => move("right")}>
          Right
        </button>
      </div>
      <div>
        <input
          className={classes.input}
          type="number"
          min="1"
          max="5"
          value={positionX}
          onChange={e => setPositionX(e.target.value)}
        />
        <input
          className={classes.input}
          type="number"
          min="1"
          max="5"
          value={positionY}
          onChange={e => setPositionY(e.target.value)}
        />
        <button className={classes.positionButton} onClick={() => setPosition({ x: positionX, y: positionY })}>
          Set position
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { position } = state.robot;
  return {
    robotPosition: position
  };
};

const mapDispatchToProps = dispatch => ({
  move: type => dispatch(moveRobot(type)),
  setPosition: position => dispatch(setPosition(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
