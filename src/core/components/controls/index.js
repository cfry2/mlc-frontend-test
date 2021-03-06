import React, { useState } from "react";
import { connect } from "react-redux";
import { moveRobot, setPosition } from "../../actions/robot";
import styles from "./styles";
import {tableDimensions} from '../../constants/table'
import PropTypes from 'prop-types'

const Controls = ({ robotPosition, move, setPosition }) => {
  const classes = styles();
  const { x, y } = robotPosition || {};

  const [positionX, setPositionX] = useState(1);
  const [positionY, setPositionY] = useState(1);

  const handleInput = (type, value) => {
    const newPosition = Math.floor(value)
    if(newPosition >= 0 && newPosition <= tableDimensions) {
      if(type === 'x') {
        setPositionX(newPosition)
      } else {
        setPositionY(newPosition)
      }
    }
  }

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
          max={tableDimensions}
          value={positionX}
          onChange={e => handleInput('x', e.target.value)}
        />
        <input
          className={classes.input}
          type="number"
          min="1"
          max={tableDimensions}
          value={positionY}
          onChange={e => handleInput('y', e.target.value)}
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

Controls.propTypes = {
  robotPosition : PropTypes.object,
  move: PropTypes.func,
  setPosition: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
