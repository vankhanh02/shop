import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import Detail from '../Components/Details/Detail'
const ShopProduct = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product= all_product.find((e)=> e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Detail product={product}/>
    </div>
  )
}

export default ShopProduct