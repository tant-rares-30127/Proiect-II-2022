import React from 'react'
import ProductList from './ProductList'

export default function Body( {products} ) {
  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

