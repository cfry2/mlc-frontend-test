import {PLACE_ROBOT, VICTORY_DANCE} from '../constants/actions'
 
const robotReducer = (state = {victoryDance: false}, action) => {
    switch(action.type) {
        case PLACE_ROBOT: {
            const {position} = action
            return {
                ...state,
                position
            }
        }
        case VICTORY_DANCE: {
            return {
                ...state,
                victoryDance: action.value
            }
        }
        default:
            return state
    }
}

export default robotReducer