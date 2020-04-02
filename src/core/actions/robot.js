import { PLACE_ROBOT, VICTORY_DANCE } from "../constants/actions";
import { tableDimensions } from "../constants/table";
import { placeTrophy, checkIfPlacementPossible, removeTrophy } from "./trophy";

const checkIfCanMove = position => {
  return position.x < tableDimensions && position.y < tableDimensions && position.x > -1 && position.y > -1;
};

const bindRobotMoveEvents = () => dispatch => {
  document.addEventListener("keyup", e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        dispatch(moveRobot("left"));
        break;
      case 38:
        dispatch(moveRobot("up"));
        break;
      case 39:
        dispatch(moveRobot("right"));
        break;
      case 40:
        dispatch(moveRobot("down"));
        break;
      default:
        break;
    }
  });
};

export const setupRobot = () => dispatch => {
  dispatch(bindRobotMoveEvents());
};

export const moveRobot = type => (dispatch, getState) => {
  const { position } = getState().robot;
  const { position: trophyPosition } = getState().trophy;
  let newPosition;
  switch (type) {
    case "up":
      newPosition = { x: position.x, y: position.y - 1 };
      break;
    case "down":
      newPosition = { x: position.x, y: position.y + 1 };
      break;
    case "left":
      newPosition = { x: position.x - 1, y: position.y };
      break;
    case "right":
      newPosition = { x: position.x + 1, y: position.y };
      break;
    default:
      break;
  }

  const movePossible = checkIfCanMove(newPosition);
  if (movePossible) {
    if (trophyPosition) {
      const movedOnToTrophy = checkIfPlacementPossible(newPosition, trophyPosition);
      if (movedOnToTrophy) {
        dispatch(removeTrophy());
        dispatch(setVictoryDance(true));
      }
    }
    dispatch({
      type: PLACE_ROBOT,
      position: {
        x: newPosition.x,
        y: newPosition.y
      }
    });
  }
};

export const setPosition = position => dispatch => {
  dispatch(setVictoryDance(false));
  dispatch({
    type: PLACE_ROBOT,
    position: {
      x: position.x - 1,
      y: position.y - 1
    }
  });
  dispatch(placeTrophy());
};

export const setVictoryDance = dance => ({
  type: VICTORY_DANCE,
  value: dance
});
