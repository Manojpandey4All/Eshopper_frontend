import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addtocart } from "../redux/actions/productactioncreators";
import { Call } from "../utils/axois";

export const Item = (props) => {
    // const [count,setcount]=useState();
    const dispatch = useDispatch();

    const title = useRef();
    const desc = useRef();
    const price = useRef();
    const userid = useRef();
    const img = useRef();
    const [isunverified, setunverified] = useState(false);
    const token=localStorage.getItem('token');
    const id=localStorage.getItem('id');
    
    const senddata = (event) => {
        
    
   
        const obj =
        {
            title: title.current.innerText,
            desc: desc.current.innerText,
            price: price.current.value,
            img: img.current.value,
            userid:localStorage.getItem('id')

        }
      if(token!=null&&id!==null){
       
        const post = Call.addtocart(obj)
        post.then((res) => {

            if (res.data.value) {

                getdata()


            }
        }).catch((err) => {
       
            console.log(err.message);
        })
    }
    else{
        setunverified(true)
    }
    }

    const getdata = () => {

        const promise = Call.showcart();

        promise.then(data => {
            dispatch(addtocart(data.data))



        }).catch(err => {
            if (err) {

                console.log(err);
            }
        })

    }
if(isunverified===true){
    return(<><Navigate to='/login'/></>)
}else{
 
        return (<>



            <div className="col-md-4" style={{
                boxShadow: '0px 0px 3px 0px lightgrey',
                borderRadius: '3px', width: "31%", margin: props.marginleft, height: '210px',
                background:props.background,
                marginBottom: props.bottom
            }}>
                <div className="row" >
                    <div className="col-md-4"   >
                        <input type="hidden" ref={img} value={props.item.image} />
                        <img src={`http://localhost:4000/${props.item.image}`}
                            style={{ width: "120px", height: "200px", padding: '20px 15px 20px 15px' }}
                            alt='' />

                    </div>
                    <div className="col-md-8" style={{ padding: '20px 15px 20px 15px' }} >

                        <p className="card-text" ref={title} value={props.item.name}
                            style={{
                                textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                overflow: 'hidden'
                            }}><b>{props.item.name}</b></p>


                        <p className="fw-light text-muted" ref={desc} style={{
                            display: '-webkit-box', WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                        ><b>{props.item.pdescription}</b></p>


                        <div className="row">
                            <div className="col">
                                <input type="hidden" ref={price} value={props.item.price} />
                                <p className="card-text" style={{ paddingTop: "7px" }} ><b>{props.item.price}Rs
                                </b></p>
                            </div>
                            <div className="col">
                                <button value={props.item._id} ref={userid} className="btn btn-primary"
                                    onClick={senddata} type="submit">Add to Cart</button>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


        </>





        );



    }

}



