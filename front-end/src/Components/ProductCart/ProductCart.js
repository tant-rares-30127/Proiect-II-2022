import React, { useState, useEffect } from "react";
import CartBody from "./CartBody";
import { v4 as uuidv4 } from "uuid";
import img1 from "../../Images/products/telefon_mobil.png";
import img2 from "../../Images/products/telefon_mobil_apple.png";
import img3 from "../../Images/products/telefon_mobil_samsung.png";

export const ProductCartContext = React.createContext();

export default function ProductCart() {
  const [products, setProducts] = useState([]);

  const productCartContextValue = {
    handleAmountVariation: handleAmountVariation,
    handleRemoveProduct: handleRemoveProduct,
  };

  useEffect(() => {
    setProducts(productsData)
  }, [])

  function handleRemoveProduct(id) {
    const newProducts = products.filter((p) => {
      return p.id !== id;
    });

    setProducts(newProducts);
  }

  function handleAmountVariation(id, increment) {
    let newProducts = products.map((p) => p)
    newProducts.map((p) => {
      if (p.id === id && p.amount + increment >= 1 && p.amount < 98) {
        p.amount = p.amount + increment;
      }
    });

    setProducts(newProducts);
  }

  console.log(products.length)

  return (
    <ProductCartContext.Provider value={productCartContextValue}>
      <div className="Cart-container">
        <div className="Cart-header-container">
          <div className="Cart-header">
            <h2>Your bin</h2>
            <h2 className="Cart-products-number">{products.length} products</h2>
          </div>
          <hr></hr>
        </div>
        {products.length === 0 ? <div>Your cart is empty! Add somethinkg in it!</div> : <CartBody data={products} />}
        {products.length === 0 ? null : <button className="Send-order-btn">Send the order</button>}
      </div>
    </ProductCartContext.Provider>
  );
}

const productsData = [
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 99,
    image: img1,
  },
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 1.000,
    amount: 1,
    image: img2,
  },
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
    image: img3,
  },
];
