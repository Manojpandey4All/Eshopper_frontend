import React, {useRef,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Card } from "../components/cartcard";
import { Servererror } from "../pages/Servererror";
import { removecart } from "../redux/actions/productactioncreators";
import { Call } from "../utils/axois"


export const Addcartcontainer = () => {
    const [cart, setcart] = useState([]);
    const [loader,setloader]=useState(false);
    const [isupdate,setupdate]=useState(false);
    const dispatch= useDispatch();
    // const [data, isdeleted] = useState(false);
    const  isdeleted=useSelector((state)=>state.Removereducer.payload);
    // console.log('isdelted value',isdeleted)
        const id = useRef();
        const userid=localStorage.getItem('id');


    useEffect(() => {
    
        getcart();

    },[]);

  
        useEffect(()=>{
                        getcart();
                      
        },[isdeleted])
    
   

    const  getcart =() => {
      

        const promise =  Call.showcart(userid);
        

        promise.then(data => {
          
                setcart(data.data);
              
            dispatch(removecart(false));
        }).catch(err=>{
            if(err){
              
                setloader(true);
            }
        })
    
    }
  
    

  
    if(userid!==null && cart.length!==0){

 
return(
  
    <div className="row">
        {
React.Children.toArray(
      cart?.map((item)=>{
        return(<>
           <Card item={item}/>
       
            </>
         
        )
      })
         
      
)
    }
</div>
      
    
)

    }
else{
   return( <div className="row justify-content-center" style={{height:'100vh',textAlign:"center"}}>
       <div className="col" style={{paddingTop:'50px'}}>
           <h5 className="text-danger"> You cart is empty </h5>
             <Link className="btn btn-primary" to='/shop'>Got to Shop Page</Link>
       </div>
   </div>)
}

    // }
    // else{
    // return(    <Navigate to='/login'/>)
    // }
// return(<><p>Hello iam in cart</p></>)
}