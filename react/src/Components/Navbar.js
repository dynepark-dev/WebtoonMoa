import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.scss";
import logo from "../Assets/logo.svg";
import logo_kr from "../Assets/logo_kr.svg";

function Navbar() {
  const tabArray = [
    { id: 0, title: "최신웹툰", link: "/new" },
    { id: 1, title: "연재웹툰", link: "/webtoons?type=ongoing" },
    { id: 2, title: "완결웹툰", link: "webtoons?type=finished" },
    { id: 3, title: "성인웹툰", link: "/webtoons?type=adult" },
    { id: 4, title: "BL/GL", link: "/webtoons?type=blgl" },
    { id: 5, title: "커뮤니티", link: "/community" },
  ];
  const [flip, setFlip] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState({
    activeTab: null,
    tabs: tabArray,
  });
  function toggleActive(index) {
    setActive({ ...active, activeTab: active.tabs[index] });
  }
  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div className={styles.burger} onClick={() => setOpen((prev) => !prev)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <Link to="/" onClick={() => toggleActive(null)}>
          <div
            className={`${styles.logo} ${flip ? styles.flip : ""}`}
            onMouseEnter={() => setFlip((prev) => !prev)}
          >
            <img className={styles.logo_front} src={logo} alt="logo" />
            <img className={styles.logo_back} src={logo_kr} alt="logo_kr" />
          </div>
        </Link>

        <ul className={`${styles.gnb} ${open ? styles.open : ""}`}>
          {tabArray.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              onClick={() => toggleActive(item.id)}
            >
              <li
                className={`${styles.tab} ${
                  item.id === active.activeTab?.id ? styles.active : ""
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        <ul className={styles.icons}>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className={styles.search}>
            <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
