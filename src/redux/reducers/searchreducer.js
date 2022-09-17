import { ActionTypes } from "../constants/productconstant";

export const Searchreducer=(state=[],{type,payload})=>{

    switch(type){
        case ActionTypes.SEARCH_PRODUCT:
        return({...state,payload});
        default: return(state);
    }

}