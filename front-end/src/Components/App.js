import React from "react";
import FooterConteiner from './Footer/FooterConteiner';
import '../Style/App.css'
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";


function App() {
  return (
    <>
      <NavBar />
      <Body products={products}/>
      <FooterConteiner/>
    </>
  )
}

export default App;

const products = ['Laptop', 'Tablet', 'Phone']
