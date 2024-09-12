import React from 'react'
import ProductTable from './tablesforms/ProductTable'
import { Outlet } from 'react-router-dom'

const ProductSec = () => {
  return (
    <div>
    <ProductTable/>
    <Outlet/>


    </div>
  )
}

export default ProductSec