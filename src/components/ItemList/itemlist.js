import React from "react";
import styles from "./itemlist.module.css";
const defaultImagePath = "https://via.placeholder.com/150";
const ItemList = (array) => {
  return (
    <div className="products">
      {Array.isArray(array.array)
        ? array.array.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                style={{ backgroundColor: item.color }}
              >
                <img
                  src={item.url || defaultImagePath}
                  alt={item.name}
                  className={styles.icon}
                />
                <div className={styles.item_footer}>
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
