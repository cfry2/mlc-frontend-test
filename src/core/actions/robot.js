import { PLACE_ROBOT } from '../constants/actions'
import {tableDimensions } from '../constants/table'

const calculateCoord = () => {
    return Math.floor(Math.random() * tableDimensions)
}

const checkIfCanMove = (position) => {
    return position.x < tableDimensions && position.y < tableDimensions && position.x > -1 && position.y > -1
}

const bindRobotMoveEvents = () => dispatch => {
    document.addEventListener('keyup', (e) => {
    e.preventDefault()
    switch(e.keyCode) {
        case 37:
            dispatch(moveRobot('left'))
            break;
        case 38:
            dispatch(moveRobot('up'))
            break;
        case 39:
            dispatch(moveRobot('right'))
            break;
        case 40:
            dispatch(moveRobot('down'));
            break;
        default:
            break;
    }
    })
}

export const setupRobot = () =>  dispatch => {
    const positionX = calculateCoord()
    const positionY = calculateCoord()

    dispatch({
        type: PLACE_ROBOT,
        position: {
            x: positionX,
            y: positionY
        }
    })

    dispatch(bindRobotMoveEvents())
}

export const moveRobot = (type) => (dispatch, getState) => {
    
    const { position } = getState().robot
    let newPosition;
    switch (type) {
        case 'up':
            newPosition = {x: position.x, y: position.y - 1}
            break;
        case 'down':
            newPosition = {x: position.x, y: position.y + 1}
            break;
        case 'left':
            newPosition = {x: position.x - 1, y: position.y}
            break;
        case 'right':
            newPosition = {x: position.x + 1, y: position.y}
            break;
        default:
            break;
    }

    const movePossible = checkIfCanMove(newPosition)
    if(movePossible) {
        dispatch({
            type: PLACE_ROBOT,
            position: {
                x: newPosition.x,
                y: newPosition.y
            }
        })
    }
    
}

export const setPosition = (position) => ({
    type: PLACE_ROBOT,
    position: {
        x: position.x-1,
        y: position.y-1
    }
})