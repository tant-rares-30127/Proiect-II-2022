import React, { useState, useEffect } from "react";
import axios from "axios";
import CartBody from "./CartBody";
import { v4 as uuidv4 } from "uuid";
import img1 from "../../Images/products/telefon_mobil.png";
import img2 from "../../Images/products/telefon_mobil_apple.png";
import img3 from "../../Images/products/telefon_mobil_samsung.png";

export const ProductCartContext = React.createContext();

export default function ProductCart() {
  const [products, setProducts] = useState(productsData);

  const productCartContextValue = {
    handleAmountVariation: handleAmountVariation,
    handleRemoveProduct: handleRemoveProduct,
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:5001/ShoppingCarts/ProductsCart",
      headers: {},
      data: {
        user: user
      },
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
      });
  }, []);

  function handleRemoveProduct(id) {
    const newProducts = products.filter((p) => {
      return p.id !== id;
    });

    setProducts(newProducts);
  }

  function handleAmountVariation(id, increment) {
    let newProducts = products.map((p) => p);
    newProducts.map((p) => {
      if (p.id === id && p.amount + increment >= 1 && p.amount < 98) {
        p.amount = p.amount + increment;
      }
    });

    setProducts(newProducts);
  }

  return (
    <ProductCartContext.Provider value={productCartContextValue}>
      <div className="Cart-container-border">
        <div className="Cart-container">
          <div className="Cart-header-container">
            <div className="Cart-header">
              <h2>Your bin</h2>
              <h2 className="Cart-products-number">
                {products.length} products
              </h2>
            </div>
            <hr></hr>
          </div>
          {products.length === 0 ? (
            <div>Your cart is empty! Add somethinkg in it!</div>
          ) : (
            <CartBody data={products} />
          )}
          {products.length === 0 ? null : (
            <button className="Send-order-btn">Send the order</button>
          )}
        </div>
      </div>
    </ProductCartContext.Provider>
  );
}

const user = {
  id: 1,
  address: {
    id: 1,
    country: "Romania",
    city: "Sighisoara",
    details: "La sefi",
  },
  username: "Rares",
  password: "Rares",
  email: "rares",
  phone: "rares",
  shoppingCart: {
    id: 1,
    dateTime: "2022-05-01T00:00:00",
    user: null,
  },
};

const productsData = [
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 2,
    image: img1,
  },
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 1.0,
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
