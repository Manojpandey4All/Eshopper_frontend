
import { Link, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { API, Call } from "../utils/axois";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setuserdetails } from "../redux/actions/useractioncreator";


export const Header = (props) => {
  const count = useSelector(state => state.cartreducer.payload);
  const [token, settoken] = useState(false);
  const initValue={search:''}
  const [search,setsearch]=useState(initValue);
  const [logout,setlogout]=useState(false);
const dispatch=useDispatch();
const flag=localStorage.getItem('token')
  // console.log(flag)
  
    useEffect(()=>{

    },[props.change])
  const clearToken = (e) => {
    e.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('flag');
  localStorage.removeItem('id');
  dispatch(setuserdetails(undefined));
   delete axios.defaults.headers.Authorization ;
   props.islogut();
  
  }
const handelChange=(e)=>{
e.preventDefault()
const {name,value}=e.target;
setsearch({...initValue,[name]:value});
props.getvalue(search);

}



  return (

    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary row justify-content-between">

        <div className="col col-md-3" style={{ marginLeft: '20px' }}>
          <Link className="navbar-brand" to="/">Eshopper</Link>
            {/* <Link className="navbar-brand" to="/">Furnituremart</Link> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col col-md-8" >
          <div className="collapse navbar-collapse row" id="navbarSupportedContent">

            <div className="col col-md-7">
              <ul className="navbar-nav mr-auto justify-content-around">
                <li className="nav-item active" >
                  <Link className="nav-link text-light" to="/" style={{ fontWeight: '700' }}>Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link text-light" to="/shop" style={{ fontWeight: '700' }}>Shop</Link>

                </li>
                {flag===null ?
                  <>
                    <li className="nav-item active">

                      <Link className="nav-link text-light" to="/register" style={{ fontWeight: '700' }}>Register</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link text-light" to="/login" style={{ fontWeight: '700' }}>Login</Link>
                    </li> </> :
                  <li className="nav-item active">
                    <a className="nav-link text-light" onClick={clearToken} style={{ fontWeight: '700' }} href="#">Logout</a>
                  </li>

                }
                
                <li className="nav-item active">
                  <Link className="nav-link text-light" to="/about-us" style={{ fontWeight: '700' }}>About Us</Link>
                </li>

                <li className="nav-item active">

                  <Link to="/cart" > <i className="fas fa-shopping-cart nav-link text-light" style={{ fontWeight: '700' }}>{count !== undefined ? count.length : ''} </i></Link>

                </li>

              </ul>
            </div>
            <div className="col col-md-4">
              <form className="form-inline my-2 my-lg-0" action="/shop" method="post" >
                <div className="row">
                  <div className="col col-md-10">
                    <input className="form-control mr-sm-2" value={search.name} name="search" onChange={handelChange} type="search" placeholder="Search" aria-label="Search" />
                  </div>
                  <div className="col col-md-2">
                    <Link to='/shop' className="btn btn-outline-light">Go</Link>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

      </nav>
      <Outlet />
    </>
  )
              
}
