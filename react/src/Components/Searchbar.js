import React from "react";
import styles from "../Styles/Searchbar.module.scss";

function Searchbar({ searchClose }) {
  return (
    <div className={styles.Searchbar}>
      <div className={styles.wrapper}>
        <div class={styles.search_bar}>
          <form>
            <input type="text" placeholder="Search title or author" />
          </form>
        </div>
        <div class={styles.link_close} onClick={searchClose} />

        <div class={styles.quick_links}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an Apple Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Apple Store Online</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">AirPods</a>
            </li>
            <li>
              <a href="#">AirTag</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
