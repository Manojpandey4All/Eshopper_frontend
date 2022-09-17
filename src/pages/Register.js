import { useEffect, useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Sucessmessage } from "../messages/Sucessmessage"
import { Warningmessage } from "../messages/Warringmessage"
import { Call } from "../utils/axois"
import { Contact } from "./contactus"
import { Users } from "./Users"




export const Register = (props) => {
    const iconcss = {
        background: 'conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat'
        , WebkitBackgroundClip: ' text',
        backgroundClip: 'text'
        , color: 'transparent',
        WebkitTextFillColor: 'transparent'
    }
    const radiuscss = {
        padding: '15px 200px 15px 200px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '50px', fontWeight: '600',

        color: '#fff',
        fontSize: '15px',
        marginRight: "20px",
        marginTop: '10px',
        marginBottom: "20px",
        marginLeft: "20px"
    }
    const inputcss = {
        padding: '15px 20px 15px 30px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '50px',
        fontWeight: '600',
        color: '#4285F4',
        fontSize: '15px',
        marginTop: "20px",
        marginBottom: "20px"

    }
    const labelcss = {
        marginLeft: "20px"
    }
    const Name = useRef();
    const Email = useRef();
    const Password = useRef();
    const Gender = useRef();
    const Contact = useRef();
    const Address = useRef();
    const Configpassword = useRef();
    const [isexits, setexists] = useState(false);
    const initialValues = { Name: "", Email: "", Password: "", Configpassword: "", Gender: "", Contact: "", Address: "" }
    const [formvalues, setformvalues] = useState(initialValues);
    const [formerror, setformerror] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [isFlag, setFlag] = useState(false);

    useEffect(() => {


        if (Object.keys(formerror).length === 0 && isSubmit) {
           
            senddata();
        }
console.log("value of in component updatae",isexits)
    }, [formerror])

  
    const handelValidation = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setformvalues({ ...formvalues, [name]: value })

    };





    const getInput = (event) => {
        event.preventDefault();
        const erros = validate(formvalues)

        setformerror(erros);
        setIsSubmit(true);

    }

    const senddata = () => {
        console.log("Isexits value",isexits)

        const result = Call.userRegister(formvalues);
        setexists(false);
        setFlag(false);
        result.then(response => {
            console.log("response value",response.data.isexits);
            if (response.data.isexits === 'true') {
            
                setexists(true);
             
            } 
            
            if(response.data.isregister==='true') {
                
                setFlag(true);
                setformvalues( { Name: "", Email: "", Password: "", Configpassword: "", Gender: "", Contact: "", Address: "" });
            }


        }).catch(err => {
            console.log("in the err", err.message)
        })
    }
    const validate = (values) => {
        const error = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.Name) {
            error.Name = "Name field can't be empty"
           
        }
        if (!values.Email) {
            error.Email = "Email field can't be empty"
           
        } else
            if (!regex.test(values.Email)) {
                error.Email = "Enter Vaild Email";
               
            }
        if (!values.Password) {
            error.Password = "Password field can't be empty"
            
        }


        if (!values.Configpassword) {
            error.Configpassword = "Confirm password field can't be empty"
           
        }
        else if (values.Password !== values.Configpassword) {
            error.Configpassword = "Password didn't match"
           
        }
        if (!values.Address) {
            error.Address = "Address field can't be empty"
          
        }
        if (!values.Contact) {
            error.Contact = "Contact field can't be empty"
          
        }
        return error;
    }

   if(isFlag){
  return(
    <Navigate to="/login" />)
   }
   else{
    return (<>
    
        {/* //  isFlag?    */}
        {/* //   <Navigate to="/login" />:null } */}
          {
          isexits?<Warningmessage message="This Email is Already Taken" />:null
     
    }
        <div className="row justify-content-center">
        <form className="col-md-6" method="post" action="/register" style={{marginTop:'20px'}}>
            <div className="row">
                {isexits}
                <div className="form-group col-md-6">
                    <label htmlFor="inputname" style={labelcss}>Full Name</label>
                    <input type="text" ref={Name} onChange={handelValidation} name="Name" className="form-control" id="inputname" placeholder="FullName" value={formvalues.Name} style={inputcss} required />
                    <p className="text-danger">{formerror.Name}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputemail" style={labelcss}>Email</label>
                    <input type="email" ref={Email} onChange={handelValidation} name="Email" className="form-control" id="inputemail" placeholder="Email" value={formvalues.Email} style={inputcss} required />
                    <p className="text-danger">{formerror.Email}</p>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputpassword" style={labelcss}>Password</label>
                    <input type="text" ref={Password} onChange={handelValidation} name="Password" className="form-control" id="inputpassword" placeholder="Password" value={formvalues.Password} style={inputcss} required />
                    <p className="text-danger">{formerror.Password}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputcongfigpass" style={labelcss}>Confirm Password</label>
                    <input type="text" ref={Configpassword} onChange={handelValidation} name="Configpassword" className="form-control" id="inputconfigpass" placeholder="Confirm Password" value={formvalues.Configpassword} style={inputcss} required />
                    <p className="text-danger">{formerror.Configpassword}</p>
                </div>
            </div>


            <div className="row">
                <div className="form-group col-md-6">
                    <input type="radio" ref={Gender} onChange={handelValidation} value="Male" name="Gender" id="inputmale" style={radiuscss} required />
                    <label htmlFor="inputmale">Male</label>

                </div>
                <div className="form-group col-md-6">

                    <input type="radio" ref={Gender} onChange={handelValidation} value="Female" name="Gender" id="inputfemale" style={radiuscss} required />
                    <label htmlFor="inputfemale">Female</label>
                </div>
            </div>


            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputphone" style={labelcss}>Phone Number</label>
                    <input type="text" ref={Contact} onChange={handelValidation} name="Contact" className="form-control" id="inputphone" placeholder="Phone Number" value={formvalues.Contact} style={inputcss} required />
                    <p className="text-danger">{formerror.Contact}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputaddress" style={labelcss}>Address</label>
                    <textarea ref={Address} col="10" row="10" onChange={handelValidation} name="Address" className="form-control" id="inputaddress" placeholder="Address" value={formvalues.Address} style={inputcss} required />
                    <p className="text-danger"> {formerror.Address}</p>
                </div>
            </div>
            <div className="row justify-content-center" style={{ marginTop: '10px' }}>
                <div className="col col-md-10">
                    <button type="submit" className="btn btn-primary signin" onClick={getInput} style={radiuscss}>Sign in</button>
                </div>
            </div>
            <div className="Links">
                            <div className="row" style={{ textAlign: 'start', fontWeight: '600', padding: '10px' }}>

                                <div className="col">
                                    <span>All ready have an account?</span><Link to="/login" style={{ color: '#5138EE' }}> Signup</Link>
                                </div>
                            </div>
                        </div>
        </form>
        </div>
    </>)
}
}