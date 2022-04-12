import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.scss";
import logo from "../Assets/logo.svg";
import logo_kr from "../Assets/logo_kr.svg";
import useToggle from "../Hooks/useToggle";
import Modal from "./Modal";
import Login from "./Login";

function Navbar() {
  const tabArray = [
    { id: 0, title: "최신웹툰", link: "/new" },
    { id: 1, title: "연재웹툰", link: "/webtoons?type=ongoing" },
    { id: 2, title: "완결웹툰", link: "webtoons?type=finished" },
    { id: 3, title: "성인웹툰", link: "/webtoons?type=adult" },
    { id: 4, title: "BL/GL", link: "/webtoons?type=blgl" },
    { id: 5, title: "MyPage", link: "/my" },
    { id: 6, title: "커뮤니티", link: "/community" },
  ];

  const [flip, setFlip] = useToggle(false);
  const [open, setOpen] = useToggle(false);
  const [modalOpen, setModalOpen] = useToggle(false);
  const [active, setActive] = useToggle(-1);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div className={styles.burger} onClick={() => setOpen()}>
          <i className="fa-solid fa-bars"></i>
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
        <ul className={styles.icons}>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className={styles.search} onClick={() => setModalOpen(true)}>
            <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Login onClose={() => setModalOpen(false)} />
      </Modal>
    </nav>
  );
}

export default Navbar;
