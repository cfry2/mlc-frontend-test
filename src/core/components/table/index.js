import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import { tableDimensions } from "../../constants/table";
import Robot from "../robot";
import Trophy from "../trophy";
import PropTypes from 'prop-types'

export const setUpEmptyTable = () => {
  const emptyTable = [];
  for (let i = 0; i < tableDimensions; i++) {
    emptyTable.push([]);
    for (let x = 0; x < tableDimensions; x++) {
      emptyTable[i].push("empty");
    }
  }
  return emptyTable;
};

const Table = ({ robotPosition, trophyPosition }) => {
  const classes = styles();
  const board = setUpEmptyTable();
  if (robotPosition) {
    const { x: robotX, y: robotY } = robotPosition;
    board[robotY][robotX] = "robot";
    if (trophyPosition) {
      const { x: trophyX, y: trophyY } = trophyPosition;
      board[trophyY][trophyX] = "trophy";
    }
  }

  return (
    <div>
      {board &&
        board.map((x, index) => (
          <div key={`x-${index}`} className={classes.tableRow}>
            {x.map((y, index) => (
              <div key={`y-${index}`} className={classes.tableCell}>
                {y === "robot" && <Robot />}
                {y === "trophy" && <Trophy />}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  const { position: robotPosition } = state.robot;
  const { position: trophyPosition } = state.trophy;

  return {
    robotPosition,
    trophyPosition
  };
};


Table.propTypes = {
  robotPosition: PropTypes.object,
  trophyPosition: PropTypes.object
}


export default connect(mapStateToProps)(Table);
