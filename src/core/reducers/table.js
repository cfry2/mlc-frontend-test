import {SETUP_EMPTY_TABLE} from '../constants/actions'

const tableReducer = (state = {}, action) => {

    switch(action.type) {
        case SETUP_EMPTY_TABLE: {
            return {
                ...state,
                board: action.emptyTable
            }
        }
        default:
            return state
    }
}

export default tableReducer