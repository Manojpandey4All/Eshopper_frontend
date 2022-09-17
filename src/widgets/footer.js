import { Link } from "react-router-dom";
export const Footer=(props)=>{
    return(<>
    <footer className="full-footer" >
    <div className="container top-footer p-md-3 p-1">
      <div className="row">
        <div className="col-md-4 pl-4 pr-4">
              
            <h2>Eshopper</h2>
            {/* <h2>Furnituremart</h2> */}

      
          

        </div>

        <div className="col-md-4  pl-4 pr-4">
          <h3>Important Links</h3>
          <ul className="navbar-nav mr-auto justify-content-around">
                <li className="nav-item active" >
                  <Link className="nav-link" to="/" style={{ fontWeight: '700' }}>Home</Link>
                </li>
                <li className="nav-item active" >
                  <Link className="nav-link" to="/shop" style={{ fontWeight: '700' }}>Shop</Link>
                </li>
                <li className="nav-item active" >
                  <Link className="nav-link" to="/about-us" style={{ fontWeight: '700' }}>About Us</Link>
                </li>
                <li className="nav-item active" >
                  <Link className="nav-link" to="/cart" style={{ fontWeight: '700' }}>Cart</Link>
                </li>
                </ul>
       
        </div>

      

        <div className="col-md-4 pl-4 pr-4">
          <h3>Contact Us</h3>
          <ul className="navbar-nav mr-auto justify-content-around">
                <li className="nav-item active" >
                  <p className="nav-link" style={{ fontWeight: '700' }}><i className="fas fa-phone"></i> +(91) 9090909090</p>
                </li>
                <li className="nav-item active" >
                  <p className="nav-link" style={{ fontWeight: '700' }}><i className="fas fa-envelope"></i> contact@eshopper.com </p>
                </li>
                <Link to='/feedback' className="nav-item active" style={{ fontWeight: '700' }} >
                <i className="fas fa-comment"></i>   Feedback
                </Link>
               
              </ul>

          

          </div>
          
          </div>
 
        </div>
      
    <div className="container-fluid bottom-footer pt-2">
      <div className="row">
        <div className="col-12 text-center">
          <p>Copyrights © 2022 - All rights reserved</p>
        </div>
      </div>
    </div>
 
    
  </footer>
    </>)
}