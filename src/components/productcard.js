import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchproduct } from "../redux/actions/productactioncreators";
import { Users } from "../pages/Users";
import { remove, removeproduct } from "../redux/actions/productactioncreators";
import { Call } from "../utils/axois";

export const Productcard=(props)=>{


    const productid = useRef();
    const dispatch=useDispatch();
  
    
    const deleteproduct=(e)=>{
        
            const id=productid.current.value;  
        //    const name=title.current.value
        //    console.log("name",id);
            const result=Call.deleteproduct(id);
            result.then(data=>{
                dispatch(removeproduct(true));
            }).catch(err=>{
                if(err){
                    console.log("iam delete cart",err.message)
                }
            })
        }

    const editproduct=(e)=>{

      console.log(productid.current.value)
      const obj={
          id:productid.current.value
      }
    const result=Call.searchproduct(obj);
    result.then(data=>{
        // console.log(data);
        dispatch(searchproduct(data));
    }).catch(err=>{
        if(err){
            console.log(err.message)
        }
    })
    
    }


    return (<>
                            <div className="col-md-5" style={{
                                    boxShadow: '0px 0px 3px 0px lightgrey',
                                    borderRadius: '3px', margin: '20px 20px 20px 0px', height: '250px'
                                }}>
                                    <div className="row">
                                        <div className="col-md-4" >
                                            {/* <input type="hidden" ref={img} value={props.items.image} /> */}
                                            <img src={`http://localhost:4000/${props.items.image}`}
                                                style={{ width: "120px", height: "200px", padding: '20px 15px 20px 15px' }}
                                                alt='' />

                                        </div>
                                        <div className="col-md-8" style={{ padding: '20px 15px 20px 15px' }} >
                                           <div className="row">
                                            <div className="col col-md-6"style={{textAlign:'start',padding:'2px'}}>
                                            <Link to="/uploadproduct" onClick={editproduct}>
                                                <input type="hidden" value={props.items._id}  ref={productid}/>
                                            <i className="fas fa-edit"></i>
                                            </Link>
                                            </div>
                                            <div className="col col-md-6" style={{textAlign:'end',padding:'2px'}}>
                                            <Link to="/product" onClick={deleteproduct}>
                                            <i className="fas fa-backspace"></i>                                            </Link>
                                            </div>
                                            </div>
                                            <div className="col">
                                                
                                                
                                            <p className="card-text"  value={props.items.name}
                                                style={{
                                                    textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                    overflow: 'hidden'
                                                }}><b>{props.items.name}</b></p>


                                            <p className="fw-light text-muted"  style={{
                                                display: '-webkit-box', WebkitLineClamp: '3',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}
                                            ><b>{props.items.pdescription}</b></p>
                                            
                                            <p className="fw-light text-muted"  style={{
                                                display: '-webkit-box', WebkitLineClamp: '3',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}
                                            ><b>{props.items.catname}</b></p>
                                       

                                            </div>
                                           


                                            <div className="row">
                                                <div className="col">
                                                    <input type="hidden"  value={props.items.price} />
                                                    <p className="card-text" style={{ paddingTop: "7px" }} ><b>{props.items.price}Rs
                                                    </b></p>
                                                </div>
                                             

                                            </div>

                                        </div>



                                    </div>
                                </div>
                      



            </>   
)


}
