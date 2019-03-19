import { SWITCH_VIEW, SORT_COLUMN, CHANGE_FLOOR } from './actions-type/actions-type'

export const switchView = payload => {
    return {
        type: SWITCH_VIEW,
        payload
    }
}
export const sortColumn = payload => {
    return {
        type: SORT_COLUMN,
        payload
    }
}

export const changeFloor = payload => {
    return {
        type: CHANGE_FLOOR,
        payload
    }
}