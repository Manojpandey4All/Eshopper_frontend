import { ActionTypes } from "../constants/Userconstant";

export const logoutReducer=(state={payload:false},{payload,type})=>{
// console.log("Iam call",payload);
    switch(type){
        case ActionTypes.USER_LOGOUT:
            return({...state,payload})
    ;
        default: return state;
    }
}