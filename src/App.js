import logo from './logo.svg';
import './App.css';
// import { Eshopper } from './container/EshopperContainer';
// import { Admincontainer } from './container/Admincontainer';
import { Call } from './utils/axois';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setproduct } from './redux/actions/productactioncreators';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Sidebaar } from './components/Sidebar';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Adminitem } from './components/Adminitem';
import { Productupload } from './pages/Productupload';
import { Users } from './pages/Users';
import { Nopage } from './pages/Nopage';
import { Header } from './widgets/header';
import { Home } from './pages/Home';
import { Productcontainer } from './container/productcontainer';
import { About } from './pages/Aboutus';
import { Addcartcontainer } from './container/addtocartcontainer';
import { Footer } from './widgets/footer';
import { Feedback } from './components/feedback';
import { Payment } from './pages/Payment';



function App() {
   const dispatch = useDispatch();
   const [clicked,setclicked]= useState(false);
   const [state,setstate]=useState('');
   const [isshow,setshow]=useState(false);
   const userlogout=useSelector((state)=>state.logoutReducer.payload);
   const navigate=useNavigate();
   const flag=localStorage.getItem('flag');
   console.log("value of logouout" ,localStorage.getItem('flag'));
   useEffect(() => {

      fetchProducts();


   }, []);

   const fetchProducts = async () => {

      const promise = await Call.get_Product();


      try {
         dispatch(setproduct(promise.data.res))
      } catch (error) {
         console.log('err', error);
      }
   }

   useEffect(()=>{
   
},[clicked])


  const isclick=()=>{
 
        setclicked(true);
   }

   const   isexpire=()=>{
        setclicked(false)
   }

   const searchValue=(value)=>{
      
        setstate(value.search);
       
   }
   if(flag==='true'){
        
        return(
             <>
   <div className="row" style={{height:'100vh' ,overflow:"hidden",margin:'0'}}>
      
      <Sidebaar />
      
      <div className="col col-md-9" style={{height:'100vh' ,overflow:"scroll" }}>
          <Routes>
              <Route index element= {<div className="row justify-content-center"
               style={{overflow:"scroll"}}><Adminitem /></div>}/>
              <Route path="uploadproduct" element={<Productupload/>}/>

              <Route path="product" element={<div className="row justify-content-center" 
              style={{overflow:"scroll"}}><Adminitem /></div>}/>
              
              <Route path="users" element={<Users/>}/>
              <Route path="*" element={<Nopage/>} />
              </Routes>        
      </div>
      </div>
    
      
     
             </>
        )
   }
   else{
  return(<>
  
           <Header islogut={isexpire} change={clicked} getvalue={searchValue}/>
           <Routes>
                
      <Route index element={<Home/> }/>
      <Route path="shop" element={<Productcontainer filterproduct={state} /> }/>
      <Route path="register" element={<Register  change={state}/> }/>
      <Route path="login" element={<Login change={isclick}/> }/>
    
      <Route path="about-us" element={<About/> }/>
      <Route path="cart" element={<Addcartcontainer/> }/>
      <Route path="feedback" element={<Feedback/> }/>
      <Route path="payment" element={<Payment/> }/>
            <Route path="*" element={<Nopage/>} />
           </Routes>
       
           <Footer style={{margin:'0'}} />
      
  </>   )
}


}
export default App;
