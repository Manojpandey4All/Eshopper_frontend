import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Call } from "../utils/axois";

export const Users=()=>{
    const [users,setusers]=useState([]);

    useEffect(() => {
        getusers();
        
    }, []);

    const getusers=()=>{
     const result=   Call.getusers();
    
     result.then(data=>{
         if(data!==null){
            console.log(data.data);
            setusers(data.data)
         }
         
     }).catch(err=>{
         if(err)
         {
             console.log(err.message);
         }
     })
        }
    return(
        <>
   <table className="table table-hover">
   <thead>
    <th>Name</th>
    <th>Email</th>
    <th>Gender</th>
    <th>Address</th>
    <th>Phone No</th>
    
  </thead>
  <tbody>
        {
            React.Children.toArray((
                users.map((user)=>{
                   return( <>
                    <tr>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Gender}</td>
                        <td>{user.Address}</td>
                        <td>{user.Contact}</td>
                        </tr>                  
                    </>)
                })
            ))
        }
    </tbody>
        </table>
        </>
    )
}