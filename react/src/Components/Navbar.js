import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.scss";
import logo from "../Assets/logo.svg";
import logo_kr from "../Assets/logo_kr.svg";
import useToggle from "../Hooks/useToggle";
import Modal from "./Modal";
import Login from "./Login";
import NavbarIcons from "./NavbarIcons";
import Searchbar from "./Searchbar";

function Navbar() {
  const tabArray = [
    { id: 0, title: "최신웹툰", link: "/new" },
    { id: 1, title: "연재웹툰", link: "/webtoons?category=ongoing" },
    { id: 2, title: "완결웹툰", link: "webtoons?category=completed" },
    { id: 3, title: "성인웹툰", link: "/webtoons?category=adult" },
    { id: 4, title: "BL/GL", link: "/webtoons?category=BL/GL" },
    { id: 5, title: "MyPage", link: "/my" },
    { id: 6, title: "커뮤니티", link: "/community" },
  ];
  const [flip, setFlip] = useToggle(false);
  const [open, setOpen] = useToggle(false);
  const [loginOpen, setLoginOpen] = useToggle(false);
  const [searchOpen, setSearchOpen] = useToggle(false);
  const [active, setActive] = useToggle(-1);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div className={styles.burger} onClick={() => setOpen()}>
          <i className="fa-solid fa-bars" />
        </div>
        <Link to="/" onClick={() => setActive(-1)}>
          <div
            className={`${styles.logo} ${flip && styles.flip}`}
            onMouseEnter={() => setFlip()}
          >
            <img className={styles.logo_front} src={logo} alt="logo" />
            <img className={styles.logo_back} src={logo_kr} alt="logo_kr" />
          </div>
        </Link>
        <ul className={`${styles.gnb} ${open && styles.open}`}>
          {tabArray.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              onClick={() => setActive(item.id)}
            >
              <li
                className={`${styles.tab} ${
                  item.id === active && styles.active
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <button onClick={() => setSearchOpen(true)}>오픈</button>
        <NavbarIcons loginOpen={() => setLoginOpen(true)} />
      </div>
      <Modal isOpen={searchOpen} onClose={() => setSearchOpen(false)}>
        <Searchbar searchClose={() => setSearchOpen(false)} />
      </Modal>

      <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)}>
        <Login onClose={() => setLoginOpen(false)} />
      </Modal>
    </nav>
  );
}

export default Navbar;
