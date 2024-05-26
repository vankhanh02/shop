import React from 'react'
import './Offer.css'
import ex_img from "../Assets/exclusive_image.png"
const Offer = () => {
  return (
    <div className="offer">
        <div className="left">
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>ONLY BEST SELLER PRODUCT</p>
            <button>Check Now</button>

        </div>
        <div className="right">
            <img src={ex_img} alt="Exclusive image" />

        </div>
    </div>
  )
}

export default Offer