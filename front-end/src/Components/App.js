import React from "react";
import '../Style/App.css'
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/">
          <Body products={products}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

const products = ['Laptop', 'Tablet', 'Phone']
