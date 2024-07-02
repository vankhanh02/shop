import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItem = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className="cartitems">
        <div className="cartitems-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quatity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className="cartitems-format cartitems-main">
                                <img src={e.image} alt="" className='cartitems-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>removeFromCart(e.id)}alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;   
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${0}</p> 

                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p> 

                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <h3>${0}</h3>

                    </div>
                </div>
                <button>CLICK TO CHECKOUT</button>
            </div>
            <div className="cartitems-voucher">
                <p>If you have a voucher, enter it here</p>
                <div className="cartitems-voucherbox">
                    <input type="text" placeholder='Voucher' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem