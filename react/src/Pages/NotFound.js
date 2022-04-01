import React from "react";
import styles from "../Styles/NotFound.module.scss";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.NotFound}>
      <h1>404</h1>
      <h2>Ooops!</h2>
      <h4>This page is not available</h4>
      <button className="primary-button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default NotFound;
