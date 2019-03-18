import { SWITCH_VIEW } from './actions-type/actions-type'


export const switchView = payload => {
    return {
        type: SWITCH_VIEW,
        payload
    }
}