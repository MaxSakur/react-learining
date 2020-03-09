import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ data = [], currentPage, onClick }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <li
          key={index}
          onClick={() => onClick(item)}
          className={currentPage === index + 1 ? styles.active : ""}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default Pagination;
