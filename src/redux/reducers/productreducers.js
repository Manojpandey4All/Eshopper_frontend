 import { ActionTypes } from "../constants/productconstant";
 export const productreducer=(state=[],{payload,type})=>{
  // console.log('data in payload',payload)
    switch(type){
    case ActionTypes.SET_PRODUCT:
    return ({...state,payload});
    // case ActionTypes.REMOVE_PRODUCT:
    //   return({...state,payload});
    
    default: return state;
    }


 }


