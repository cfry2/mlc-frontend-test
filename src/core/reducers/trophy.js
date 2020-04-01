import { PLACE_TROPHY } from "../constants/actions"

const trophyReducer = (state = {}, action) => {
    switch(action.type) {
        case PLACE_TROPHY: {
            const {position} = action
            return {
                ...state,
                position
            }
        }
        default:
            return state
    }
}

export default trophyReducer