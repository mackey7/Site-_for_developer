import { SWITCH_VIEW, SORT_COLUMN, CHANGE_FLOOR, CHANGE_GARDEN, CHANGE_STATUS, CHANGE_PRICE } from './actions-type/actions-type'

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
export const changeGarden = payload => {
    return {
        type: CHANGE_GARDEN,
        payload
    }
}
export const changeStatus = payload => {
    return {
        type: CHANGE_STATUS,
        payload
    }
}
export const changePrice = (e, key) => {
    return {
        type: CHANGE_PRICE,
        e,
        key
    }
}