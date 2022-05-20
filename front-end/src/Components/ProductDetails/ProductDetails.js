import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import DetailsTab from "./DetailsTab";

export default function ProductDetails() {
  const [product, setProduct] = useState()

  useEffect(() => {
    axios.get("https://localhost:5001/Products/ReturnProduct?productName=Laptop MacBook")
    .then((response) => response.data)
    .then((data) => {
      setProduct(data)
    })
    .catch((error) => console.log(error))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div className="Product-details-body-container">
      <div className="Product-details-title-container">
        <h2>Product Details</h2>
      </div>
      <Product product={product}/>
      <DetailsTab description={product === undefined ? "No description" : product.description}/>
    </div>
  );
}


