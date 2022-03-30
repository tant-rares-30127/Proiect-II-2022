import React from "react";
import '../Style/App.css'
import NavBar from "./NavBar";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <NavBar />
      <ProductList products={products}/>
    </>
  )
}

export default App;

const products = ['Laptop', 'Tablet', 'Phone']
