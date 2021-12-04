import  actionTypes from './filter-type'
const filterReducer = (state = '', {type, payload})=>{
        switch(type){
            
            case actionTypes.CHANGE_FILTER:

            return state = payload
            
        default: return state
        }
}
export default filterReducer;