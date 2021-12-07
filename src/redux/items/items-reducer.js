
import {  combineReducers } from "redux";
import filterReducer from '../filter/filter-reducer';
import { createReducer } from '@reduxjs/toolkit';
import *as actions from './items-action'


const itemsReducer = createReducer([], {
    [actions.addItems]: (state, {payload}) => addItem(state, payload),
    [actions.deleteItems]: (state, {payload}) => state = state.filter((item) => item.id !== payload)
});

const addItem =(state, {id, name, number}) =>{

    if(!(name && number)){
        alert('Please write name and number')
        return state
    }

    const messageAlert = (name) => {
        alert(`${name} is already in contacts`);
        return state
    }

    const searchContact = (name) => {
        const normolizedName = name.toLowerCase();
        const item = state.find(
            ({name}) => name.toLowerCase() === normolizedName
        );
        return item;
    }

    return searchContact(name) ? messageAlert(name) : [...state, {id: id, name: name, number: number} ] 
}


const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})


export default contactsReducer;