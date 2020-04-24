import React from "react";
import styles from "./header.module.css";

const Header = ({ name }) => {
  const authName = name ? name : "Авторизация";

  return (
    <div className={styles.container}>
      <ul className={styles.navigation}>
        <li>
          <a href="/goods">Диллерская сеть</a>
        </li>
        <li>
          <a href="/products">Refectocil Academy</a>
        </li>
        <li>
          <a href="/products">Новости</a>
        </li>
        <li>
          <a href="/products">Доставка и оплата</a>
        </li>
        <li>
          <a href="/products">Гарантия и обмен</a>
        </li>
        <li>
          <a href="/products">О компании</a>
        </li>
      </ul>
      <ul className={styles.navigation}>
        <li>
          <a href="/products">Каталог товаров</a>
        </li>
        <li>
          <a href="/discont">Акции</a>
        </li>
      </ul>

      <p className={styles.auth}>{authName}</p>
    </div>
  );
};

export default Header;
