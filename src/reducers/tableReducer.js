import { SORT_COLUMN } from '../actions/actions-type/actions-type';
import { tableData } from '../api/tableData';

const initialState = {
    flatsData: tableData
}


const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_COLUMN: {
            return {
                ...state
            }
        }
        default:
            return state
    }

}
export default tableReducer