import { PLACE_TROPHY, REMOVE_TROPHY } from "../constants/actions"

const trophyReducer = (state = {}, action) => {
    switch(action.type) {
        case PLACE_TROPHY: {
            const {position} = action
            return {
                ...state,
                position
            }
        }
        case REMOVE_TROPHY: {
            return {}
        }
        default:
            return state
    }
}

export default trophyReducer