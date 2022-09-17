import { ActionTypes } from "../constants/productconstant"

export const  setproduct=(data)=>{
// console.log('data in act ions',data);
        return ({
            payload: data,
            type: ActionTypes.SET_PRODUCT
        })
    }
export const addtocart=(data)=>{
    // console.log("data in cart count",data);
    return({
        payload:data,
        type:ActionTypes.ADD_CART
    })
   
   
}
export const removecart=(data)=>{
return({
    payload:data,
    type:ActionTypes.REMOVE_CART
})

}
export const removeproduct=(data)=>{
    return({
        payload:data,
        type:ActionTypes.REMOVE_PRODUCT
    })
}

export const searchproduct=(data)=>{
    return({
        payload:data,
        type:ActionTypes.SEARCH_PRODUCT
    })
}