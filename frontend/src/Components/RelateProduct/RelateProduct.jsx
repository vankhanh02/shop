import React from 'react'
import './RelateProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelateProduct = () => {
  return (
    <div className="relateproduct">
        <h1>Related Product</h1>
        <hr />
        <div className="relate-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}

        </div>
    </div>
  )
}

export default RelateProduct