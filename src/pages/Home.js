import { useSelector } from "react-redux";
import { Banner } from "../components/banner";
import { Item } from "../components/Item";
import React, { useState, useEffect } from 'react';


export const Home=(props)=>{
    const products = useSelector((state) => state.productreducer.payload)

    return(
        <div className="home_page">
       
         <Banner/>
       
       <div className="products row" style={{ background:'#fff',marginTop:'-270px',padding:'0'}}>
             {
React.Children.toArray(
             products?.map((item)=>{
            return    <Item item={item} marginleft="20px 10px 20px 20px" background="#fff" bottom="50px"/>   
             }))}
             
             </div>
         <div className="footer">

         </div>
      
        </div>
    );

}