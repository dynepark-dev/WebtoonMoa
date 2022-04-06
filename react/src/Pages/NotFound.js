import React from "react";
import styles from "../Styles/NotFound.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.NotFound}>
      <h1>404</h1>
      <h2>Ooops!</h2>
      <h4>This page is not available</h4>
      <Button children="Go Back" click={() => navigate(-1)} />
    </div>
  );
}

export default NotFound;
