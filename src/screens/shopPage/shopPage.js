import React from "react";
import "./shopPage.css";
import shopPageContainer from "../../containers/shopPageContainer";

const ShopPage = props => {
  let products = props.products;
  const defaultImagePath = "https://via.placeholder.com/150";
  return (
    <div>
      {products.map((item, index) => {
        return (
          <div>
            <img
              src={item.url || defaultImagePath}
              alt={item.name}
              className="icon"
            />
            <p key={index} style={{ backgroundColor: item.color }}>
              {item.name} - {item.size}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
