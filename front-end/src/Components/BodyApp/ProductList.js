import React from 'react'
import { v4 as uuidv4 } from "uuid";
import icon from '../../Images/Laptop.png'

export default function ProductList( {products} ) {
const productsToDisplay = products.map( p => {
    return (
        <li key={uuidv4()}>
            <img 
                className='Product-Icon'
                src={icon} alt="Icon"></img>
            <a href='../../public/index.html'>{p}</a>
        </li>
    )
}) 

  return (
    <div className='Product-list-container'>
        <h2>Products</h2>
        <ul>
            {productsToDisplay}
        </ul>
    </div>
  )
}