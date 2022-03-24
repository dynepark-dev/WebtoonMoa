import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.scss";

function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.navbar_content}>
                <li>
                    <Link to="/">웹툰모아</Link>
                </li>
                <li>
                    <Link to="/new">최신웹툰</Link>
                </li>
                <li>
                    <Link to="연재웹툰">연재웹툰</Link>
                </li>
                <li>
                    <Link to="완결웹툰">완결웹툰</Link>
                </li>
                <li>
                    <Link to="성인웹툰">성인웹툰</Link>
                </li>
                <li>
                    <Link to="성인웹툰">BL/GL</Link>
                </li>
                <li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </li>
                <li>
                    <i className="fa-solid fa-user"></i>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
