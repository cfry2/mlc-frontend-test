import {PLACE_ROBOT} from '../constants/actions'
 
const robotReducer = (state = {}, action) => {
    switch(action.type) {
        case PLACE_ROBOT: {
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

export default robotReducer