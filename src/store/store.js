
import { createStore } from 'redux'
// import reducers from '../reducers';
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

// import tableReducer from '../reducers/tableReducer';
// import flatViewsDate from '../reducers/flatViewsReducer'

const store = createStore(rootReducer);
export default store
