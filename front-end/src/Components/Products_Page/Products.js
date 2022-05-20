import React from "react";
import Phone_List from "./Phone_List";
import "./Styles/Products.css";
export default function Products({ selectedProducts }) {
  return (
    <div className="Wrapper">
      <Phone_List selectedProducts={selectedProducts} />
    </div>
  );
}
