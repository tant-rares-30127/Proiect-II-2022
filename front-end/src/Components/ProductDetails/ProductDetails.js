import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import DetailsTab from "./DetailsTab";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  useEffect(() => {
    let product_name = localStorage.getItem("productName");
    axios
      .get(
        "https://localhost:5001/Products/ReturnProduct?productName=" +
          product_name
      )
      .then((response) => response.data)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Product-details-body-container">
      <div className="Product-details-title-container">
        <h2>Product Details</h2>
      </div>
      <Product product={product} />
      <DetailsTab
        description={
          product === undefined ? "No description" : product.description
        }
        productId={product === undefined ? null : product.id}
      />
    </div>
  );
}
