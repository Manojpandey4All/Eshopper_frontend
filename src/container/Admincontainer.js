import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Route, Router, Routes } from "react-router-dom"
import { Adminitem } from "../components/Adminitem"
import { Sidebaar } from "../components/Sidebar"
import { Nopage } from "../pages/Nopage"
import { Productupload } from "../pages/Productupload"
import {Users} from '../pages/Users'

export const Admincontainer=()=>{
     

  
    return(
        <>
        <div className="row" style={{height:'100vh' ,overflow:"hidden",margin:'0'}}>
        
        <Sidebaar/>
        
        <div className="col col-md-9" style={{height:'100vh' ,overflow:"scroll" }}>
            <Routes>
                <Route index element={<div className="row justify-content-center" style={{overflow:"scroll"}}>
                    <Adminitem /></div>}/>
                <Route path="uploadproduct" element={<Productupload/>}/>
                <Route path="product" element={<div className="row justify-content-center" style={{overflow:"scroll"}}><Adminitem /></div>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="*" element={<Nopage/>} />
                </Routes>        
        </div>
        </div>
      
        
        </>
    )
    }
 
