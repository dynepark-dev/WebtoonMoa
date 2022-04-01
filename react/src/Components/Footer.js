import React from "react";
import styles from "../Styles/Footer.module.scss";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  const socialIconsArray = [
    { id: 0, name: "facebook", link: "#", icon: "fa fa-facebook" },
    { id: 1, name: "twitter", link: "#", icon: "fa fa-twitter" },
    { id: 2, name: "dribbble", link: "#", icon: "fa fa-dribbble" },
    { id: 3, name: "linkedin", link: "#", icon: "fa fa-linkedin" },
  ];
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img className={styles.logo_front} src={logo} alt="logo" />
          </div>
          <div className={styles.name}>웹툰모아</div>
        </div>
        <div className={styles.middle}>
          <div className={styles.about}>
            <h4>ABOUT</h4>
            <div>
              Webtoonmoa is Wiki for webtoons. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic, voluptas exercitationem alias
              iusto laudantium est aut illum dolores veritatis tempora excepturi
              labore eligendi ipsum earum deserunt laborum? Rem pariatur facilis
              voluptatum earum! Maiores exercitationem deserunt id quia deleniti
              commodi ipsum.
            </div>
          </div>
          <div className={styles.category}>
            <h4>Category</h4>
            <ul>
              <li>
                <Link to="#">Updated</Link>
              </li>
              <li>
                <Link to="#">Ongoing</Link>
              </li>
              <li>
                <Link to="#">Finished</Link>
              </li>
              <li>
                <Link to="#">Adult</Link>
              </li>
              <li>
                <Link to="#">BL</Link>/GL
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
            </ul>
          </div>
          <div className={styles.link}>
            <h4>Quick Link</h4>
            <ul>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Contribuite</Link>
              </li>
              <li>
                <Link to="#">Policy</Link>
              </li>
              <li>
                <Link to="#">SiteMap</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>Copyright © 2099 All Rights not Reserved by Webtoonmoa.</div>
          <ul className={styles.social_icons}>
            {socialIconsArray.map((item) => (
              <li className={styles.icon}>
                <a className={item.name} href={item.link}>
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
