import { SORT_COLUMN, CHANGE_FLOOR, CHANGE_GARDEN } from '../actions/actions-type/actions-type';
import { tableData } from '../api/tableData';

const initialState = {
    flatsData: tableData
}


const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_COLUMN: {
            let sortFn = (a, b) => {
                if (a[action.payload] < b[action.payload]) return -1;
                if (a[action.payload] > b[action.payload]) return 1;
                return 0;
            }
            let sortedColumn = state.flatsData.sort(sortFn)
            console.log(sortedColumn)
            return {
                ...state, flatsData: [...sortedColumn]
            }
        }

        case CHANGE_FLOOR: {
            const selectedFloor = state.flatsData.filter(item => action.payload === item.floor)
            return {
                ...state, flatsData: selectedFloor
            }
        }
        case CHANGE_GARDEN: {
            const selectedGarden = state.flatsData.filter(item => item.garden !== action.payload)
            return {
                ...state, flatsData: selectedGarden
            }
        }
        default:
            return state
    }

}
export default tableReducer