import { createStore } from 'redux'
// import reducers from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";

import tableReducer from '../reducers/tableReducer';
// import flatViewsDate from '../reducers/flatViewsReducer'

const store = createStore(tableReducer, composeWithDevTools())
export default store