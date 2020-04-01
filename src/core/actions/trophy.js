import {tableDimensions } from '../constants/table'
import { PLACE_TROPHY, REMOVE_TROPHY } from '../constants/actions'

const calculateCoord = () => {
    return Math.floor(Math.random() * tableDimensions)
}

export const checkIfPlacementPossible = (trophyPosition, robotPosition) => {
    return trophyPosition.x === robotPosition.x && trophyPosition.y === robotPosition.y
}

export const placeTrophy = () => (dispatch, getState) => {
    const { position } = getState().robot
    let positionX, positionY, duplicate
    do {
        positionX = calculateCoord()
        positionY = calculateCoord()
        duplicate = checkIfPlacementPossible({x: positionX, y: positionY}, position)
    }
    while(duplicate)
    dispatch({
        type: PLACE_TROPHY,
        position: {
            x: positionX,
            y: positionY
        }
    })
}

export const removeTrophy = () => ({
    type: REMOVE_TROPHY
})