import { createReducer } from '@reduxjs/toolkit';
import *as actions from './filter-action'

const filterReducer = createReducer('', {
    [actions.filteredName]: (_, {payload}) => payload
})


export default filterReducer;