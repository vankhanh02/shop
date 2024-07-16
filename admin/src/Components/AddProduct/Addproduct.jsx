import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'
const Addproduct = () => {
    const [image, setImage]= useState(false);

    const imageHandler= (e) =>{
        setImage(e.target.files[0]);

    }
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "men",
        old_price:"",
        new_price:"",
    });
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const add_product = async ()=>{
        console.log(productDetails);
        let resData;
        let product= productDetails;

        let formData= new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data)=>{resData=data})

        if (resData.success){
            product.image= resData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),

            }). then((resp) => resp.json()).then((data)=>{
                data.success?alert("Product Added"): alert("Failed")
            })
        }
    }
  return (
    <div className="addproduct">
        <div className="addproduct-field">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name= "name" placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-field">
                <p>Old price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="number" name="old_price" placeholder='Type here' />
            </div>
            <div className="addproduct-field">
                <p>New price</p>
                <input value={productDetails.new_price} onChange={changeHandler}  type="number" name= "new_price" placeholder='Type here' />
            </div>
        </div>
        <div className="addproduct-field">
            <p>Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className="category-selector">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="addproduct-field">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='upload-thumnail' />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input'  hidden/>
        </div>
        <button onClick={()=>{add_product()}}>ADD</button>

    </div>
  )
}

export default Addproduct