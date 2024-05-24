import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className="item">
        <img src={props.image} alt="image" />
        <p>{props.name}</p>
        <div className="item-price">
            <div className="price-new">
                {props.new_price}
            </div>
            <div className="price-old">
                {props.old_price}
            </div>
        </div>
        
    </div>
  )
}

export default Item
