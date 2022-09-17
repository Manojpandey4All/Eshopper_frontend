import {useEffect} from 'react'

export const Warningmessage=(props)=>{
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

   },1000);
  }

    return(

     
        <>      <div id="alert" style={{position:"absolute",top:"0",left:"50%"}} className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.message}</strong>
        
      </div>
      
      </>
      
      
    )
}