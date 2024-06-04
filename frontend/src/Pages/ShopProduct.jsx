import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import Detail from '../Components/Details/Detail'
import DesBox from '../Components/DesBox/DesBox'
import RelateProduct from '../Components/RelateProduct/RelateProduct'
const ShopProduct = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product= all_product.find((e)=> e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Detail product={product}/>
      <DesBox/>
      <RelateProduct/>
    </div>
  )
}

export default ShopProduct