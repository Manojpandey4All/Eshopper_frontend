import { useState } from "react"
import { Call } from "../utils/axois";
import { Submited } from "../widgets/submited";

export const Feedback=()=>{

    const initValue={email:'',message:''}
    const [values,setvalue]=useState(initValue);
    const [error,seterror]=useState({});
    const [issubmit,setsubmit]=useState(false);
   const handelEvent=(e)=>{
        const {name,value}=e.target;
        setvalue({...values,[name]:value})
        
    }
    const validate=(values)=>{
        const error={}
        console.log("vlaues",values)
        if(!values.email){
            error.email="Field Can't be empty"
        }
        if(!values.message){
            error.message="Field Can't be empty"
        }
        return error;
    }
    const submit=(e)=>{
        e.preventDefault();
        seterror(validate(values));
        console.log(values);
       if(values.email!==''&& values.message!==''){
           console.log("iam in if")
          const result=  Call.feedback(values);       
          result.then(data=>{
            setsubmit(true)
            }).catch(err=>{
                if(err){
                    console.log(err.message)
                }
            })
        }
    }
    if(issubmit){
        return(<> <Submited/></>)
    }
    else{    return (<>
    <div className="row justify-content-center" style={{height:'100vh'}}>

        <form className="col col-md-6" style={{marginTop:'50px',border:'1px solid lightgray',marginBottom:'350px',padding:'10px 20px 10px 20px'}}>
  <div className="form-group row" style={{marginTop:'20px'}}>
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label" >Email</label>
    <div className="col-sm-10" >
      <input type="email" value={values.email} name='email' onChange={handelEvent} className="form-control" id="staticEmail" placeholder="Enter your Email" />
    <span className="text-danger">{error.email}</span>
    </div>
  </div>
  <div className="form-group row" style={{marginTop:'20px'}}>
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <textarea className="form-control" value={values.message} onChange={handelEvent}  name='message' id="inputPassword" placeholder="Enter your Feedback"/>
      <span className="text-danger">{error.message}</span>
    </div>
  </div>
  <div className="row justify-content-center" style={{marginTop:'20px'}}>
    <div className="col col-md-3">
      <button type='submit' className="btn btn-primary" onClick={submit}> Submit</button>
      </div>
  </div>
</form>
</div>
    </>)

}}