import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartBody from "./CartBody";
import { UserContext } from "../App";

export const ProductCartContext = React.createContext();

export default function ProductCart() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  const productCartContextValue = {
    handleAmountVariation: handleAmountVariation,
    handleRemoveProduct: handleRemoveProduct,
  };

  useEffect(() => {
    if (user !== undefined && user !== null) {
      axios({
        method: "post",
        url: "https://localhost:5001/ShoppingCarts/ProductsCart",
        headers: {},
        data: user,
      })
        .then((response) => response.data)
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => console.log(err))
        .catch((err) => console.log(err));
    }
  }, [user]);

  function handleRemoveProduct(shoppingCart) {
    axios({
      method: "delete",
      url: "https://localhost:5001/ShoppingCarts/RemoveProductShoppingCart",
      headers: {},
      data: shoppingCart,
    }).catch((err) => console.log(err));
    const newProducts = products.filter((p) => {
      return p.id !== shoppingCart.id;
    });
    console.log(newProducts);

    setProducts(newProducts);
  }

  function handleAmountVariation(increment, shoppingCart) {
    if (shoppingCart.quantity + increment < 1) return;
    if (increment > 0) {
      axios({
        method: "post",
        url: "https://localhost:5001/ShoppingCarts/RaiseProductQuantity",
        headers: {},
        data: shoppingCart,
      }).catch((err) => console.log(err));
    } else {
      axios({
        method: "post",
        url: "https://localhost:5001/ShoppingCarts/DecreaseProductQuantity",
        headers: {},
        data: shoppingCart,
      }).catch((err) => console.log(err));
    }
    shoppingCart.quantity = shoppingCart.quantity + increment;
    let newProducts = products.map((p) => p);

    setProducts(newProducts);
  }

  function handlePlaceOrder() {
    window.location.href = "http://localhost:3000/checkOut"
  }

  return (
    <ProductCartContext.Provider value={productCartContextValue}>
      <div className="Cart-container-border">
        <div className="Cart-container">
          <div className="Cart-header-container">
            <div className="Cart-header">
              <h2>Your bin</h2>
              <h2 className="Cart-products-number">
                {products.length}{" "}
                {products.length === 1 ? "product" : "products"}
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
            <button onClick={handlePlaceOrder} className="Send-order-btn">Send the order</button>
          )}
        </div>
      </div>
    </ProductCartContext.Provider>
  );
}