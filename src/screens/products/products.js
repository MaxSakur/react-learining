import React from "react";
import { ItemList } from "../../components";
import "./index.css";

const GoodAndServices = props => {
  let products = props.products;
  return (
    <div className="container">
      <ItemList array={products} />
    </div>
  );
};

export default GoodAndServices;
