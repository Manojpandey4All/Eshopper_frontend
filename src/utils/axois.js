import axios from 'axios';
import axois from 'axios';
import {Urls }from '../utils/urls'
// console.log(localStorage.getItem('token'));
const token=localStorage.getItem('token');
console.log("token in axios ",token);
export const API = axios.create({
        baseURL:"http://localhost:4000",
        headers:{
         
            Authorization:`Bearer ${token}`,
          //  "Content-Type": "text/plain,multipart/form-data,application/json "
          // "Content-Type": "application/json"

        
          }
})


export const Call={
  
  //  Loginuser = (formdata) => API.post("/user/login",formdata)
  
   userLogin(obj){
    return (API.post("/user/login",obj))
    // return (axios.post(Urls.User.login,obj));
  },
  userRegister(obj){
    return (API.post("/user/register",obj))

    // return (axios.post(Urls.User.Register,obj));
  },

  getusers(){
    return (API.get("user/users"))
  
    // return(axios.post(Urls.Product.update_Product,obj))
  },
  feedback(obj){
    return (API.post("user/feedback",obj));
  },
  payment(obj){
    return (API.post("user/payment",obj));
  },
  addtocart(obj){
    console.log("add to cart axios ",obj)
    return (API.post("/addtocart",obj))
    // return axois.post(Urls.Product.add_tocart,obj);
  },

  get_allproduct(){
    return (API.get("/products"))

    // return axois.get(Urls.Product.get_all_Product)
  },
  get_Product(){
    return (API.get("/product"))

    // return axois.get(Urls.Product.get_Product)
  },
  showcart(obj){
    // console.log('object in showcart',obj)
    return (API.post("/cart",{id:obj}))
    // return axois.get(Urls.Product.cart_Product);
  }
  ,
  deletecart(obj){
    return (API.post("/deletecart",obj))

    // return axios.post(Urls.Product.delete_cart,{id:obj});
  }
  ,
  add_product(obj){
    // const config={
    //   herders:{
    //     'Content-Type':'multipart/form-data'

    //   }
    // }
    return (API.post("/addproduct",obj))
  // console.log("data in axois call",obj);
    // return axios.post(Urls.Product.add_Product,obj,config)
},
deleteproduct(obj){
  return (API.post("/deleteproduct",{id:obj}))
  
  // return(axios.post(Urls.Product.delete_Product,{id:obj}));
}
,searchproduct(obj){
  return (API.post("/searchproduct",obj))
  // console.log("obj is here",obj)
  // return(axios.post(Urls.Product.search_Product,obj));
},
updateproduct(obj){
  return (API.post("/updateproduct",obj))

  // return(axios.post(Urls.Product.update_Product,obj))
}

}