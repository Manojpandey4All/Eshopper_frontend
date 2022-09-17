import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setpaymentinfo } from "../redux/actions/paymentAction";
import { addtocart, remove, removecart } from "../redux/actions/productactioncreators";
import { Call } from "../utils/axois";
import { Loader } from "../widgets/loader";

export const Card = (props) => {
    const dispatch = useDispatch();
    const [data, isdeleted] = useState(false);
    const [isdata,setdata]=useState(false);
    const name = useRef();
    const price = useRef();
    const id = useRef();

    const deletecart = () => {



        const productid = id.current.value;
        const userid=localStorage.getItem('id')
        const obj={
            p_id:productid,
            user_id:userid
        }
        const promise = Call.deletecart(obj);
        // console.log(promise);

        promise.then(response => {
            dispatch(removecart(true));
        }).catch(err => {
           
                // dispatch(removecart(true));
            isdeleted(true);

                // console.log("item is not deleted from cart", err);
          
        })
    }

    const buyNow=(e)=>{
        e.preventDefault();
        const obj={
            p_id:id.current.value,
            user_id:localStorage.getItem('id'),
            p_name:name.current.value,
            price:price.current.value,
            quantity:'1'
        }
            dispatch(setpaymentinfo(obj));
            setdata(true);
    }
    // console.log(props);
if(isdata){
    return(<><Navigate to="/payment"/></>)
}

if(data===true){
    return(<><Navigate to="/"/></>)
}

else{
    return (


        <div className="col col-md-4">
            <div className="card" style={{ marginTop: '20px', marginLeft: '20px', marginRight: "20px", padding: "0px 11px 0px 12px" }}>
                <div className="row card-header">
                    <div className="col col-md-10">
                    <input type="hidden" ref={name} value={props.item.title} />
                        <h5  style={{
                        display: '-webkit-box', WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{props.item.title} </h5>
                    </div>
                    <div className="col col-md-2" style={{ textAlign: 'end' }}>
                        <input type="hidden" ref={id} value={props.item._id} />
                        <i className="fas fa-times" style={{ padding: ' 7px' }} onClick={deletecart}></i>
                    </div>

                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col col-md-3" >
                            <img src={`http://localhost:4000/${props.item.img}`} alt={props.item.img} style={{width:"100%"}} />


                        </div>
                        <div className="col col-md-9" style={{ textAlign: 'end' }} >
                        <p className="fw-light text-muted" style={{
                        display: '-webkit-box', WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                    ><b>{props.item.desc}</b></p>

                        <div className="row">
                            <div className="col-md-6" style={{paddingTop:'7px'}}>
                            <input type="hidden" ref={price} value={props.item.price} />
                            <p  className="card-text" style={{ textAlign: 'start' }}><b><span style={{fontSize:'15px'}}>₹</span> {props.item.price} 
                            </b>
                            </p>
                            </div>

                            <div className="col-md-6">
                            <a href="#" className="btn btn-primary" onClick={buyNow} style={{ textAlign: 'end' }}>Buy Now</a>
                            </div>
                        </div>

                           

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )

}}