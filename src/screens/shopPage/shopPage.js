import React from "react";
import { ItemList } from "./../../components";
import "./shopPage.css";

const ShopPage = props => {
  let products = props.products;

  return (
    <div className="container">
      <ItemList array={products} />
    </div>
  );
};

export default ShopPage;
