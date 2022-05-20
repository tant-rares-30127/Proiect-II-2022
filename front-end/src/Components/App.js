import React from "react";
import FooterConteiner from "./Footer/FooterConteiner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../Style/App.css";
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";
import Dummy from "./Dummy";
import Dummy2 from "./Dummy2";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductCart from "./ProductCart/ProductCart";
import Recomandations from "./Recomandation/Recomandations";
import ProductsPage from "./Products_Page/ProductsPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body />
              <Recomandations />
            </>
          }
        />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/dummy" element={<Dummy2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/productCart" element={<ProductCart />} />
      </Routes>

      <FooterConteiner />
    </Router>
  );
}

export default App;
