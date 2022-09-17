import { useDispatch, useSelector } from "react-redux"
import React, { useRef, useState, useEffect, startTransition } from "react";
import { Loader } from "../widgets/loader";

import { Productcard } from "./productcard";
import { Call } from "../utils/axois";
import { removecart } from "../redux/actions/productactioncreators";
export const Adminitem = (props) => {
    const [products,setproduct]=useState([]);
    const isdelete=useSelector(state=>state.Removereducer.payload)
    const dispatch=useDispatch();
    console.log(isdelete)
    useEffect(()=>{
getproduct();
    },[])
    useEffect(()=>{
        getproduct();
    },[isdelete])

   
    const getproduct=()=>{
            const result=Call.get_allproduct()
            result.then(data=>{
          
                setproduct(data.data.res)
                dispatch(removecart(false));

            }).catch(err=>{
                if(err){
                    console.log(err.message);
                }
            }

            )
    }

    // const products = useSelector((state) => state.productreducer.payload)
    

    if (products.length!==0) {
 



        return (
            <>


                {
                    React.Children.toArray(
                        products.map((item) => {
                            return (
                                    <Productcard items={item}/>


                            )
                        }))}




            </>

        )


    }
    else {
   
        return <Loader/>
    }
}