import React from "react";
import styles from "../Styles/HoverButton.module.scss";
import useToggle from "../Hooks/useToggle";
import { Link } from "react-router-dom";

function HoverButton() {
  const [showHover, toggle] = useToggle(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollBottom = () => {
    window.scrollTo({ top: 99999, behavior: "smooth" });
  };

  return (
    <div className={styles.HoverButton}>
      <div
        className={`${styles.buttons} ${
          showHover ? styles.show : styles.hidden
        }`}
      >
        <button onClick={scrollTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
        <Link to="/">
          <button>
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <button onClick={scrollBottom}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      <button
        className={showHover ? `${styles.plus}` : ""}
        onClick={() => toggle()}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default HoverButton;
