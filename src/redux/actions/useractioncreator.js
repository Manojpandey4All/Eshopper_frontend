import { ActionTypes } from "../constants/Userconstant"

export const  setuserdetails=(data)=>{
    // console.log('data in act ions',data);
            return ({
                payload: data,
                type: ActionTypes.USER_DEATILS
            })
        }

export const setlogout=(data)=>{
    return ({
        payload: data,
        type: ActionTypes.USER_LOGOUT
    })

}