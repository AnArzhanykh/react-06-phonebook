import  actionTypes from './filter-type'

export const filteredName = (text)=>({
    type: actionTypes.CHANGE_FILTER,
    payload: text,
})
