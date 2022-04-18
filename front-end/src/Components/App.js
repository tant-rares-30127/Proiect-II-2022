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
import RecomandationContainer from "./Recomandation/RecomandationContainer";
import SpaceContainer from "./Space/SpaceContainer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/dummy1" element={<Dummy />} />
        <Route path="/dummy2" element={<Dummy2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <SpaceContainer />
      <RecomandationContainer />
      <SpaceContainer />
      <RecomandationContainer />
      <SpaceContainer />
      <RecomandationContainer />
      <SpaceContainer />
      <FooterConteiner />
    </Router>
  );
}

export default App;
