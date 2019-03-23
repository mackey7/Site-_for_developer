import { SORT_COLUMN, CHANGE_FLOOR, CHANGE_GARDEN, CHANGE_STATUS, CHANGE_PRICE } from '../actions/actions-type/actions-type';
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
            if (state.flatsData.length === 10) {
                const selectedFloor = state.flatsData.filter(item => action.payload === item.floor)
                return {
                    ...state, flatsData: selectedFloor
                }
            } else {
                const initState = initialState
                const selectedFloor = initState.flatsData.filter(
                    item => action.payload === item.floor
                );
                return {
                    ...state,
                    flatsData: selectedFloor
                };
            }


        }
        case CHANGE_GARDEN: {
            const selectedGarden = state.flatsData.filter(item => item.garden !== action.payload)
            return {
                ...state, flatsData: selectedGarden
            }
        }
        case CHANGE_STATUS: {
            const selectedStatus = state.flatsData.filter(item => item.status !== action.payload)
            return {
                ...state, flatsData: selectedStatus
            }
        }
        case CHANGE_PRICE: {
            if (action.payload === "największa") {
                console.log('najw')
                let sortFn = (a, b) => {
                    if (a[action.price] < b[action.price]) return -1;
                    if (a[action.price] > b[action.price]) return 1;
                    return 0;
                }

                let sortedColumn = state.flatsData.sort(sortFn)
                console.log(...sortedColumn)
                return {
                    ...state, flatsData: [...sortedColumn]
                }
            } else if (action.payload === "najmniejsza") {
                console.log('najmn')
                let sortFn = (a, b) => {
                    if (a[action.price] > b[action.price]) return -1;
                    if (a[action.price] < b[action.price]) return 1;
                    return 0;
                }

                let sortedColumn = state.flatsData.sort(sortFn)
                console.log(...sortedColumn)
                return {
                    ...state, flatsData: [...sortedColumn]
                }



            }
        }
        default:
            return state
    }

}
export default tableReducer