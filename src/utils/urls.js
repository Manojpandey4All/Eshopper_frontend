import axios from "axios"

// const API = axios.create({
//         baseURL:"http://localhost:4000",
//         headers:{
//             Authorization:`Bearer ${localStorage.getItem('token')}`
//         }
//     })
// console.log(localStorage.getItem('token'))
// API.interceptors.response.use((res)=>{
//     console.log(res)
//     if(localStorage.getItem('accessToken')){
//         req = `Bearer ${localStorage.getItem('token')}`
//     }
//     return req;
// })

// export const Loginuser = (formdata) => API.post("/user/login",formdata)

    export const Urls={

  
        Product :{
             get_all_Product:'http://localhost:4000/products'
            ,get_Product: 'http://localhost:4000/product'
            ,add_tocart: 'http://localhost:4000/addtocart'
            ,cart_Product:'http://localhost:4000/cart'
            ,delete_cart:"http://localhost:4000/deletecart"
            ,add_Product:"http://localhost:4000/addproduct"
            ,delete_Product:"http://localhost:4000/deleteproduct"
            ,search_Product:"http://localhost:4000/searchproduct"
            ,update_Product:"http://localhost:4000/updateproduct"
    }   ,
        User :{
                login :'http://localhost:4000/user/login',
                Register :"http://localhost:4000/user/register"
        }
    }