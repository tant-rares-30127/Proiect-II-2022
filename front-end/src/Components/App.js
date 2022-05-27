import React, { useEffect, useState } from "react";
import FooterConteiner from "./Footer/FooterConteiner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../Style/App.css";
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";
import CheckoutPage from "./CheckOut/CheckoutPage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductCart from "./ProductCart/ProductCart";
import Recomandations from "./Recomandation/Recomandations";
import ProductsPage from "./Products_Page/ProductsPage";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState();
  const UserContextValue = {
    user: user,
    handleUser: handleUser,
  };

  useEffect(() => {
    let savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function handleUser(user) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={UserContextValue}>
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
          <Route path="/checkOut" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/productCart" element={<ProductCart />} />
        </Routes>
        <FooterConteiner />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

const firstUser = {
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
