import { v4 as uuidv4 } from "uuid";
import  actionTypes from './items-type'

const itemsInitialState = [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];

const itemsReducer = (state = itemsInitialState , {type, payload})=> {
    
    switch(type){
        case actionTypes.ADD:

            if(!(payload.name && payload.number)){
                alert('Please write name and number')
               return state
            }

            const messageAlert = (payload) => {
                alert(`${payload.name} is already in contacts`);
                return state
            }

            const searchContact = (payload) => {
                const normolizedName = payload.name.toLowerCase();
                const item = state.find(
                    ({ name }) => name.toLowerCase() === normolizedName
                );
                return item;
            }

        return searchContact(payload) ? messageAlert(payload) : [...state, {id: uuidv4(), name: payload.name, number: payload.number} ] 
        
        case actionTypes.DELETE:
            state = state.filter((item) => item.id !== payload)
        return  state
        
        default: return state
    }
}

export default itemsReducer;