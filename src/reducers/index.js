import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import flatViewsReducer from './flatViewsReducer';

export default combineReducers({
    tableReducer,
    flatViewsReducer

})
