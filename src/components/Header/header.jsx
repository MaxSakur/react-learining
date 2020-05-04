import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = ({ name, isAuth }) => {
  console.log(isAuth);
  const authName = name ? (
    <p>{name}</p>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://social-network.samuraijs.com/"
    >
      <p style={{ color: "#fff" }}>Авторизация</p>
    </a>
  );
  return (
    <div className={styles.container}>
      <ul className={styles.navigation}>
        <li>
          <a href="/goods">Диллерская сеть</a>
        </li>
        <li>
          <a href="/discont">Refectocil Academy</a>
        </li>
        <li>
          <a href="/discont">Новости</a>
        </li>
        <li>
          <a href="/discont">Доставка и оплата</a>
        </li>
        <li>
          <a href="/discont">Гарантия и обмен</a>
        </li>
        <li>
          <a href="/discont">О компании</a>
        </li>
      </ul>

      <div className={styles.auth}>
        <FontAwesomeIcon icon={faUserCircle} color={"#fff"} />
        {authName}
      </div>
    </div>
  );
};

export default Header;
