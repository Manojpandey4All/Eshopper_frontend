import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import { setlogout } from "../redux/actions/useractioncreator";
export const Sidebaar=(props)=>{
  const [ischange,setchange]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
console.log(props);
  const clearstorage = (e) => {
    e.preventDefault();

    console.log("iam call")
  localStorage.removeItem('token');
  localStorage.removeItem('flag');
  localStorage.removeItem('id');
  delete axios.defaults.headers.Authorization;  
  dispatch(setlogout(true));
 setchange(true);
  }
  if(ischange){
    navigate('/login')
  }

return(
    <>
    {/* <div className="d-flex flex-column flex-shrink-0 p-3 bg-success col-md-3" style={{height:"100vh"}}> */}

    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light col-md-3" style={{height:"100vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"></svg>
      <span className="fs-4">Eshopper</span>
      {/* <span className="fs-4">Furnituremart</span> */}

    </a>  
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/product" className="nav-link link-dark list-group-item-action" aria-current="page">
        <i className="fas fa-home" width="16" height="16" style={{padding :"10px 10px 10px 10px"}}></i>
          
          Home
        </Link>
      </li>
      <li>
        <Link to="/uploadproduct" className="nav-link link-dark list-group-item-action" >
        <i className="fas fa-chevron-circle-up" width="16" height="16" style={{padding :"10px 10px 10px 10px"}}></i>
         
          Upload Product
        </Link>
      </li>
      <li>
        <Link to="/product" className="nav-link link-dark list-group-item-action" >
        <i className="fas fa-th" width="16" height="16" style={{padding :"10px 10px 10px 10px"}}></i>
          Product
        </Link>
      </li>
       <li>
        <Link to="/users" className="nav-link link-dark list-group-item-action">
        <i className="fas fa-users" width="16" height="16" style={{padding :"10px 10px 10px 10px"}}></i>
          Customers
        </Link>
      </li>
    </ul>
    <hr/>
    {/* <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a> */}
      <div className="dropdown show">
  {/* <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a> */} 
  {/* <div href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </div>  */}
  <div className="" aria-labelledby="dropdownMenuLink">
    
    <span className="dropdown-item" onClick={clearstorage}>Logout</span>
  </div>
</div>
   
    
  </div>
  <Outlet />
  </>
)
  }
    
