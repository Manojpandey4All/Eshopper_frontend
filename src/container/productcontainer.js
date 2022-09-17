
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Call } from '../utils/axois';
import { Loader } from '../widgets/loader';
import { Item } from '../components/Item';
import { setproduct } from '../redux/actions/productactioncreators';
import { useSelector } from 'react-redux';
import { Header } from '../widgets/header';
export const Productcontainer = (props) => {
  const [data, setData] = useState([]);
  const [allproduct,setallproduct]=useState([]);
  const [propsdata,setprops]=useState('');
  const dispatch = useDispatch();
   useEffect(() => {

    fetchProducts();
    fetchallProducts();

  }, []);
  // if(propsdata!==''){
  // setprops(props.filterproduct)
  // }
  // else{
  //   setprops({...data});
  // }
  // console.log("iam run productcontainer",props.filterproduct);
  const fetchProducts = async () => {

    const promise = await Call.get_Product();

    try {
      setData(promise.data.res)
      dispatch(setproduct(promise.data.res))
    } catch (error) {
      console.log('err', error);
    }
  }
  const fetchallProducts = async () => {

    const promise = await Call.get_allproduct();

    try {
      setallproduct(promise.data.res)
        } catch (error) {
      console.log('err', error.message);
    }
  }
console.log("props data", props.filterproduct.length)
if(props.filterproduct.length!==1 && props.filterproduct.length!==0){
  return (
   

   <div className='row flex' style={{ marginTop: '20px', marginLeft: "20px" }}>
     {
   allproduct?.filter(value=>value.name.toLowerCase().
   includes(props.filterproduct.toLowerCase())).map((item)=>{
     return (
       <>
         <Item item={item} marginleft="20px 10px 20px 20px"></Item>

       </>
     )

   })
 }
     </div>    
   )

 }

 

else{
  if (data.length !== 0) {
  
   
     

    return (
      <>

        <div className='row flex' style={{ marginTop: '20px', marginLeft: "20px" }}>

          {


            React.Children.toArray(
              data?.map((item) => {

                return (
                  <>
                    <Item item={item} marginleft="20px 10px 20px 20px"></Item>

                  </>
                )
              }))
          }
        </div>
      </>
    )
        }
   else {
    return (<Loader />)


  }
}

}

