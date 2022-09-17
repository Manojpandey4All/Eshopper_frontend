import { useEffect, useRef, useState } from "react";
import { Call } from "../utils/axois";
import { Sucessmessage } from "../messages/Sucessmessage";
import { useSelector } from "react-redux";
export const Productupload = () => {
    const imgname = useRef();
    const pcode = useRef();
    const name = useRef();
    const pdescription = useRef();
    const price = useRef();
    const catname = useRef();
    const id=useRef();
    const [file, setfile] = useState('');
    const [upload,setupload ] = useState(false);
    const [update,setupdate]=useState(false)
    const [state, setstate] = useState('');
    const [values, setValues] = useState('');
    const result = useSelector(state => {
        if (state.Searchreducer.length !== 0) {

      return ( state.Searchreducer.payload.data)
        }
        else {
            return ({
                _id: ' ',
                name: ' ',
                pdescription: ' ',
                pcode: ' ',
                catname: '',
                price: ' ',
               
            })
        }
    });
    useEffect(()=>{
        if(result._id!==' '){
        console.log("*************iam running************",result._id)
        setValues(result);
        }
        else{
            console.log("*************id is blank************",result._id)
            
        }
    },[result])
    
     const getfile = (e) => {
        const filedata = e.target.files[0]
        console.log(filedata)
        setfile(filedata)
    };

    //get the value input field
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            //   ...values,
            [name]: value,
        });

    };
    const formdata=(e)=>{
//   e.preventDefault();
        const formdata = new FormData();
        formdata.append('img', file);
        formdata.append('pcode', pcode.current.value);
        formdata.append('name', name.current.value);
        formdata.append('pdescription', pdescription.current.value);
        formdata.append('price', price.current.value);
        formdata.append('catname', catname.current.value);
        formdata.append('id',id.current.value);
        return formdata;
    }
 
    const updateProduct = (e) => {
       e.preventDefault()
    console.log("id",id.current.value)
    const result=Call.updateproduct(formdata()); 
    result.then(data=>{
        setupdate(true);
    }).catch(err=>{
        if(err){
            console.log(err);
        }
    })
    }

    const addproduct = (event) => {
        event.preventDefault();

        const result = Call.add_product(formdata());

        result.then(response => {

            setupload(true);
            // setValues()
        }).catch(err => {

            console.log(err.message);
        }

        )
    }



    return (

        <>

            {upload? <Sucessmessage message="Product Added Successfully" /> : null}
            {update? <Sucessmessage message="Product Update Successfully" /> : null}

            <form method="post"  encType="multipart/form-data">


                <div className="form-group" style={{ marginTop: "20px" }}>
                    <input type="text" value={values._id} ref={id} style={{display:'none'}}/>
                    <input className="form-control me-2" onChange={handleInputChange} type="text" ref={name} name="name" value={values.name} placeholder="Product Name" required aria-label="Product Name" />
                </div>

                <div className="form-group" style={{ marginTop: "20px" }}>
                    <textarea cols="4" rows="7" style={{ resize: "none" }} ref={pdescription} name="pdescription" onChange={handleInputChange} value={values.pdescription} className="form-control me-2" placeholder="Product Description" required aria-label="Product Description" />
                </div>

                <div className="form-group" style={{ marginTop: "20px" }}>
                    <input className="form-control me-2" type="text" ref={price} name="price" onChange={handleInputChange} value={values.price} placeholder="Product Price" required aria-label="Product Price" />
                </div>
                <div className="form-group" style={{ marginTop: "20px" }}>
                    <input className="form-control me-2" type="text" ref={pcode} name="pcode" onChange={handleInputChange} value={values.pcode} placeholder="Product Code" required aria-label="Product Code" />
                </div>

                <div className="form-group" style={{ marginTop: "20px" }}>
                    <select  ref={catname} name="catname" className="form-select" aria-label="Disabled select example">
                   
                        <option value={values.catname} selected > {values.catname?values.catname:'Select Category'}</option>
                        <option value="Mobile Phones">Mobile Phone</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Computer & Accessories">Computer & Accessories</option>
                        <option value="Gaming Device">Gaming Device</option>
                    </select>
                </div>




                <div className="form-group" style={{ marginTop: "20px" }}>

                    <input className="form-control me-2" type="file"  onChange={getfile} ref={imgname} required aria-label="Product Image" />
                </div>



                <div className="buttons col-12 form-group">
                    <ul className="d-flex justify-content-between form-group" style={{ marginTop: "20px" }} >
                        <li><button formAction="/addproduct" className="btn btn-outline-primary" type="submit" onClick={addproduct} style={{ padding: "5px 30px 5px 30px" }}  >Add</button></li>
                        <li><button formAction="/addproduct" className="btn btn-outline-warning" type="submit" onClick={updateProduct} style={{ padding: "5px 30px 5px 30px" }}  >Update</button></li>
                    </ul>
                </div>
            </form>






        </>


    )

}