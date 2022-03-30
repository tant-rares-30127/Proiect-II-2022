import React from "react";
import '../Style/App.css'
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";

function App() {
  return (
    <>
      <NavBar />
      <Body products={products}/>
    </>
  )
}

export default App;

const products = ['Laptop', 'Tablet', 'Phone']
