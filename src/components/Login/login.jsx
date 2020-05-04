import React from "react";
import styles from "./login.module.css";
import path from "./../../assets/logo.png";

const link = "https://social-network.samuraijs.com/login";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <img src={path} className={styles.logo} alt="" />
        <div className={styles.auth_form}>
          <form>
            <label>
              <p>Name</p>
              <input type="text" name="name" />
            </label>
            <label>
              <p>Password</p>
              <input type="text" name="password" />
            </label>
            <input
              type="submit"
              onClick={() => {
                console.log("1");
              }}
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href={link}
            >
              {link}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
