import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/store.png'
import cart_icon from '../Assets/shopping-bag.png'
import { ShopContext } from '../../Context/ShopContext'

import nav_dropdown from '../Assets/down-arrow.png'

export const Navbar = (e) => {
  const [menu,setMenu] = useState("shop")
  const {getTotalCartItem} = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-memu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <Link to='/'>
      <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p> SHOPPER</p>
      </div>
      </Link>
      <img className= "nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
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
        {localStorage.getItem('auth-token')? <button onClick={()=>{
          localStorage.removeItem('auth-token');
          window.location.replace('/');
        }}> Logout</button>:
        <Link to ="/login"><button>Login</button></Link>
        }
        <Link to = "/cart"><img src={cart_icon}  alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}
