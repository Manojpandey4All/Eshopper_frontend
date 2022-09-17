import { ActionTypes } from "../constants/Userconstant";

export const userReducer=(state=[],{type,payload})=>{

    switch(type){
        case ActionTypes.USER_DEATILS:
        return({...state,payload});
        default: return(state);
    }

}