
import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import flatViewsReducer from './flatViewsReducer';

const rootReducer = combineReducers({
    tableReducer,
    flatViewsReducer
})

export default rootReducer
