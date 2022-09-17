 import {Link} from 'react-router-dom'
export const PaymentDone=()=>{
    return(<>
    <div className="row justify-content-center" style={{background:"#FFF", height:'100vh',marginTop:"50px"}}>
    <div className="col col-md-4">
    <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt='successfully'/>
       <Link to='/' className='btn btn-primary' style={{marginLeft:'70px'}}>Payment successfully Go To Home</Link>
        </div>
    </div>
    </>)
    }