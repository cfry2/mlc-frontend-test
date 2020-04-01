import { SETUP_EMPTY_TABLE } from '../constants/actions'
import { tableDimensions } from '../constants/table'


export const setUpEmptyTable  = () => (dispatch) => {
    const emptyTable = []
    for (let i =0; i < tableDimensions; i++) {
        emptyTable.push([])
        for (let x = 0; x < tableDimensions; x++) {
            emptyTable[i].push('empty');
        }
    }
    dispatch({
        type: SETUP_EMPTY_TABLE,
        emptyTable
    })
}