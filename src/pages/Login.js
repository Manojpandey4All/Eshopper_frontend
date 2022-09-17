import { useEffect, useRef, useState } from "react"
import { Warningmessage } from "../messages/Warringmessage";
import { Call } from "../utils/axois";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAuthHeader } from "../utils/setAuthHeader";
import { Loginuser } from "../utils/urls"; 
import { setlogout, setuserdetails } from "../redux/actions/useractioncreator";


export const Login = (props) => {
    const Email = useRef();
    const Password = useRef();
    const initValue = { Email: "", Password: "" }
    const [formvalue, setFormvalue] = useState(initValue);
    const [error, seterror] = useState({});
    const [flag, setFlag] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [warning, setWaring] = useState(false);
    const [isvalid, setValid] = useState(false);
    const [isadmin,setadmin]=useState(false);
    const dispatch = useDispatch();
 
    useEffect(() => {
        if (Object.keys(error).length === 0 && flag) {
            sendData();
        }
    }, [error]);
    const handelValue = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        // console.log(e.target.value)
        setFormvalue({ ...formvalue, [name]: value });
    }
    const invoke = (e) => {
        e.preventDefault()
        // console.log("flag value",flag);
        seterror(validate(formvalue));
        setFlag(true);

    }
    const validate = (values) => {
        // console.log("values in validat",values)
        const err = {};
        if (!values.Email) {
            err.Email = "Email Field Can't Be Empty"
        }
        if (!values.Password) {
            err.Password = "Password Field Can't Be Empty"
        }
        return err;
    }
    const sendData = () => {
        setValid(false);
        setWaring(false);

        setLogin(false);
        
        const result =
        
        Call.userLogin(formvalue,);
        result.then(response => {
            
            if (response.data.islogin) {
                
                localStorage.setItem("token", response.data.accesstoken);
                localStorage.setItem('id',response.data.userid._id)
              dispatch(setuserdetails(response.data.userid))
              dispatch(setlogout(false));
                props.change()
               
                if(response.data.userid.Flag===true){
                    localStorage.setItem("flag",true);

                
                setadmin(true);
      
        }
                else{
                   
                    
                
                    setLogin(true)
                }
                                 }
            else {
                setWaring(true);
            }

            }).catch(err => {
            if (err) {
                setValid(true);
                console.log(err)
            }
        })
    }
    const iconcss = {
        background: 'conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat'
        , WebkitBackgroundClip: ' text',
        backgroundClip: 'text'
        , color: 'transparent',
        WebkitTextFillColor: 'transparent'
    }
    const radiuscss = {
        padding: '15px 70px 15px 70px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '50px', fontWeight: '600',

        color: '#fff',
        fontSize: '15px'
    }
    const inputcss = {
        padding: '15px 20px 15px 30px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '50px',
        fontWeight: '600',
        color: '#4285F4',
        fontSize: '15px'


    }
    if(isadmin){
   console.log("is admin eunning");
        return(<Navigate to="/users"/>)
    
    }else
        if (isLogin) {
      
           return(
    <Navigate to='/'/>
  
  )
    }
    else {


        return (<>

            {
                warning ? <Warningmessage message="Plese Check Your Password" /> : null
            }
            {isvalid ? <Warningmessage message="Plese Check Your Email" /> : null}



            <div className="login ">
                <div className="row justify-content-center" >
                    <div className="col col-md-5" style={{ margin: '20px' }}>
                        <div className="heading-Area col" >
                            <h3 style={{ fontWeight: '700' }}>
                                Login
                            </h3>
                            <span style={{ fontSize: "14px", color: 'light-gray' }}>Explore the unlimited collection of Electronc Product</span>
                        </div>

                        <div className="inner-body col" style={{ textAlign: 'center' }}>
                            <form>
                                <div className="col" style={{ marginBottom: '10px', marginTop: '10px' }}>
                                    <input type="text" placeholder="Enter Email Id" name="Email" onChange={handelValue} value={formvalue.Email} ref={Email} className="form-control" required />
                                    <p className="text-danger">{error.Email}</p>
                                </div>
                                <div className="col" style={{ marginBottom: '20px', marginTop: '10px' }}>

                                    <input type="password" placeholder="Enter Password" name="Password" onChange={handelValue} value={formvalue.Password} ref={Password} className="form-control" required />
                                    <p className="text-danger">{error.Password}</p>
                                </div>
                                {/* <div className="forgetLink">
                                    <div className="row" style={{ textAlign: 'end', fontWeight: '600', padding: '10px' }}>

                                        <div className="col">
                                            <a href="" >Forget password?</a>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col" style={{ margin: '5px', textAlign: 'center' }}>
                                    <button className="btn btn-primary" type="submit" onClick={invoke} style={radiuscss} >Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="Links">
                            <div className="row" style={{ textAlign: 'start', fontWeight: '600', padding: '10px' }}>

                                <div className="col">
                                    <span>Not registered yet?</span><Link to="/register" style={{ color: '#5138EE' }}> Create an Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}
