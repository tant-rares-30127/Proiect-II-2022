import React, { useState, useEffect } from "react";
import axios from "axios";
import CartBody from "./CartBody";

export const ProductCartContext = React.createContext();

export default function ProductCart() {
  const [products, setProducts] = useState([]);

  const productCartContextValue = {
    handleAmountVariation: handleAmountVariation,
    handleRemoveProduct: handleRemoveProduct,
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "https://localhost:5001/ShoppingCarts/ProductsCart",
      headers: {},
      data: user
    })
      .then((response) => response.data)
      .then((data) => {
        setProducts(data)
      });
  }, []);

  function handleRemoveProduct(shoppingCart) {
    axios({
      method: "delete",
      url: "https://localhost:5001/ShoppingCarts/RemoveProductShoppingCart",
      headers: {},
      data: shoppingCart
    }).catch(err => console.log(err))
    const newProducts = products.filter((p) => {
      return p.id !== shoppingCart.id;
    });
    console.log(newProducts)

    setProducts(newProducts);
  }

  function handleAmountVariation(increment, shoppingCart) {
    if (shoppingCart.quantity + increment < 1) return
    if (increment > 0) {
      axios({
        method: "post",
        url: "https://localhost:5001/ShoppingCarts/RaiseProductQuantity",
        headers: {},
        data: shoppingCart
      }).catch(err => console.log(err))
    } else {
      axios({
        method: "post",
        url: "https://localhost:5001/ShoppingCarts/DecreaseProductQuantity",
        headers: {},
        data: shoppingCart
      }).catch(err => console.log(err))
    }
    shoppingCart.quantity = shoppingCart.quantity + increment
    let newProducts = products.map(p => p)
    
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
                {products.length} {products.length === 1 ? 'product' : 'products'}
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
