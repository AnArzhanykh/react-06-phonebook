
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

export const addItems = createAction('item/add', (name, number)=>{
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
        }
    }
});


export const deleteItems=createAction('item/delete')