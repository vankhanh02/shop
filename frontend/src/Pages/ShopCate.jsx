import React, { useContext } from 'react'
import './CSS/ShopCate.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
const ShopCate = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop-cate">
      <img className="banner" src={props.banner} alt="" />
      <div className="indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="product">
        {all_product.map((item, i)=>{
          if (props.cate === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
      </div>
      <div className="loadmore">
        Explore More

      </div>

    </div>
  )
}

export default ShopCate