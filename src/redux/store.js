import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from 'remote-redux-devtools';
import itemsReducer from './items/items-reducer'
import filterReducer from './filter/filter-reducer'


const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})

const rootReducer = combineReducers({
    contacts: contactsReducer,
})


const store = createStore(rootReducer, composeWithDevTools() +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;