import React from "react";
import "./itemlist.css";
const defaultImagePath = "https://via.placeholder.com/150";
const ItemList = array => {
  return (
    <div className="products">
      {Array.isArray(array.array)
        ? array.array.map((item, index) => {
            return (
              <div
                key={index}
                className="item"
                style={{ backgroundColor: item.color }}
              >
                <img
                  src={item.url || defaultImagePath}
                  alt={item.name}
                  className="icon"
                />
                <div className="item-footer">
                  <p key={index}>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            );
          })
        : console.log("array", array.array)}
    </div>
  );
};

export default ItemList;
