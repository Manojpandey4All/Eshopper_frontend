import { ActionTypes } from "../constants/productconstant";

export const Removereducer=(state={payload:false},{payload,type})=>{
// console.log("Iam call",payload);
    switch(type){
        case ActionTypes.REMOVE_CART:
            return({...state,payload})
    ;
    case ActionTypes.REMOVE_PRODUCT:
        return({...state,payload})
        default: return state;
    }
}