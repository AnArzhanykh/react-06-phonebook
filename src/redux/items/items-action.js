import  actionTypes from './items-type'

export const addItems = (name, number)=>({
    type: actionTypes.ADD,
    payload: {
        name,
        number,
    }
})

export const deleteItems = (id)=>({
    type: actionTypes.DELETE,
    payload: id,
})