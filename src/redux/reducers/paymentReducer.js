import { ActionTypes } from "../constants/paymentConstant";


export const paymentReducer=(state={},{payload,type})=>{
// console.log("Iam call",payload);
    switch(type){
        case ActionTypes.SET_DETAILS:
            return({...state,payload})
    ;
        default: return state;
    }
}