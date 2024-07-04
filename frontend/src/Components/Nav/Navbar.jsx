import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/store.png'
import cart_icon from '../Assets/shopping-bag.png'
import { ShopContext } from '../../Context/ShopContext'
export const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  const {getTotalCartItem} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} width="51px" height="51px" alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop </Link>{menu==="shop"?< hr/>: <></>} 
          </li>
          <li onClick={()=>{setMenu("men")}}><Link to='/mens'>Men </Link> {menu==="men"?< hr/>: <></>}
          </li>
          <li onClick={()=>{setMenu("women")}}><Link to='/womens'>Women </Link> {menu==="women"?< hr/>: <></>} 
          </li>
          <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kid </Link> {menu==="kids"?< hr/>: <></>} 
          </li>
          <li onClick={()=>{setMenu("about")}}><Link to='/about'>About </Link> {menu==="about"?< hr/>: <></>} 
          </li>
        </ul>
        <div className="nav-login">
          <Link to ="/login"><button>Login</button></Link>
          <Link to = "/cart"><img src={cart_icon} width="51px" height="51px" alt="cart" /></Link>
          <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>
  )
}
