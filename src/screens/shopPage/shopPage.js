import React from "react";

const ShopPage = props => {
  let products = props.products;
  console.log(products);
  return (
    <div>
      {products.map((item, index) => {
        return (
          <p key={index} style={{ backgroundColor: item.color }}>
            {item.name} - {item.size}
          </p>
        );
      })}
    </div>
  );
};

export default ShopPage;
