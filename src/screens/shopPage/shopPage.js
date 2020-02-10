import React from "react";

const ShopPage = props => {
  let products = props.products;
  console.log(products);
  return (
    <div>
      {products.map(item => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
};

export default ShopPage;
