import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../Style/App.css'
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";
import Dummy from "./Dummy";
import Dummy2 from "./Dummy2";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body products={products}/>}/>
        <Route path="/dummy1" element={<Dummy/>}/>
        <Route path="/dummy2" element={<Dummy2/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>    
    </Router>
  )
}

export default App;

const products = ['Laptop', 'Tablet', 'Phone']
