import { useRef, useState } from "react";
import { useSelector } from "react-redux"
import { Call } from "../utils/axois";
import { PaymentDone } from "../widgets/paymentDone";
import { Home } from "./Home";

export const Payment=(props)=>{
    const data=useSelector((state)=>state.paymentReducer.payload);
    const ptype=useRef();
    const [ispayment,setpayment]=useState(false);
    const submit=(e)=>{
        e.preventDefault();
        const {p_id,price,user_id,quantity}=data
        const obj={
            pid:p_id,
            price:price,
            userid:user_id,
            quantity:quantity,
            pmode:ptype.current.value
        }
        console.log("object in payment",obj)
        const result= Call.payment(obj)
        result.then(data=>{
            setpayment(true);
        }).catch(err=>{
            if(err){
                console.log(err.message);
            }
        })
    }
    if(ispayment){
        return(<><PaymentDone/></>)
    }

    if(data===undefined){
        return(<><Home/></>)
    }

    return(<>
    <div className="row justify-content-center" style={{height:'100vh'}}>
    <form  className="col col-md-7" style={{marginTop:'50px',border:'1px solid lightgray',marginBottom:'350px',padding:'10px 20px 10px 20px'}}>
  <div class="form-group">
 
    <label htmlFor="exampleInputEmail1">Product Name</label>
    <input type="text" class="form-control-plaintext" value={data.p_name} readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">INR Product Price</label>
    <input type="text" class="form-control-plaintext" readOnly value={data.price} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
   
  </div>
  
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Product Quantity</label>
    <input type="text" class="form-control-plaintext" value={data.quantity} readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <div className="form-group" style={{ marginTop: "20px" }}>
                    <select  ref={ptype} name="catname" className="form-select" aria-label="Disabled select example">
                    {/* {values.catname?values.catname: */}
                        <option value='Phone Pay' selected > Select Payment mode</option>
                        <option value="Phone Pay">Phone Pay</option>
                        <option value="Google Pay">Google Pay</option>
                        <option value="Debit Card & Credit Card">Debit Card & Credit Card</option>
                        <option value="Online Banking">Online Banking</option>
                    </select>
                </div>
                <div className="row justify-content-center" style={{marginTop:'20px'}}>
    <div className="col col-md-3">
      <button type='submit' className="btn btn-primary" onClick={submit}> Submit</button>
      </div>
  </div>
 </form>
 </div>
    </>)
}


