import { ActionTypes } from "../constants/paymentConstant"


export const  setpaymentinfo=(data)=>{
    // console.log('data in act ions',data);
            return ({
                payload: data,
                type: ActionTypes.SET_DETAILS
            })
        }

