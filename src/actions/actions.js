import { SWITCH_VIEW, SORT_COLUMN, VISIBLE_PARTERRE, VISIBLE_FIRST_FLOOR, VISIBLE_GARDEN, VISIBLE_LOFT } from './actions-type/actions-type'


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

export const visibleParterre = payload => {
    return {
        type: VISIBLE_PARTERRE,
        payload
    }
}
export const visibleFirstFloor = payload => {
    return {
        type: VISIBLE_FIRST_FLOOR,
        payload
    }
}
export const visibleLoft = payload => {
    return {
        type: VISIBLE_LOFT,
        payload
    }
}
export const visibleGarden = payload => {
    return {
        type: VISIBLE_GARDEN,
        payload
    }
}