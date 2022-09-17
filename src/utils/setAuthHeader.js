import axios from "axios";

export const setAuthHeader=(token)=>{
    console.log("TOken in setauth",token)
if(token){
     console.log("Iam in if in axios");
     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
else{
delete axios.defaults.headers.Authorization;
}
}

const API = axios.create({baseURL:"http://localhost:5000"})

