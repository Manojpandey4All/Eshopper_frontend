import { ActionTypes } from "../constants/productconstant";

export const cartreducer=(state=[],{payload,type})=>{
// console.log("remove cart reducer",payload);
switch(type){
    // case ActionTypes.REMOVE_CART:
//    return({...state,payload});
   case ActionTypes.ADD_CART:
       return({...state,payload});
   default: return state;
}

}