import React from "react";
import FooterConteiner from "./Footer/FooterConteiner";
import "../Style/App.css";
import NavBar from "./NavBar/NavBar";
import Body from "./BodyApp/Body";
import RecomandationContainer from "./Recomandation/RecomandationContainer";
import SpaceContainer from "./Space/SpaceContainer";
function App() {
  return (
    <>
      <NavBar />
      <Body products={products} />
      <SpaceContainer />
      <RecomandationContainer />
      <SpaceContainer />
      <RecomandationContainer />
      <SpaceContainer />
      <RecomandationContainer />
      <SpaceContainer />
      <FooterConteiner />
    </>
  );
}

export default App;

const products = ["Laptop", "Tablet", "Phone"];
