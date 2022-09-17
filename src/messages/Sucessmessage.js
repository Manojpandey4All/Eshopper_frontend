import {useEffect} from 'react'

export const Sucessmessage=(props)=>{
  useEffect(() => {
  tempAlert();
  },[]);

 const tempAlert=()=>
  {
   let el = document.querySelector("#alert");
  //  el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");

   setTimeout(function(){
    el.style.transition="3s"
    el.style.opacity="0"

   },2000);
  }

  console.log("IA m message");
    return(

     
        <>      <div id="alert" style={{position:"absolute",top:"0",left:"50%"}} className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.message}</strong> 
        
      </div>
      
      </>
      
      
    )
}