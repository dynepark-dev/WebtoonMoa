import React from "react";
import Auth from "../Components/Auth";
import styles from "../Styles/Login.module.scss";

function Login() {
  return (
    <div className={styles.Login}>
      <Auth />
    </div>
  );
}

export default Login;
