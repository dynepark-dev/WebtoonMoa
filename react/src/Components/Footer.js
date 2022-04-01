import React from "react";
import styles from "../Styles/Footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  const socialIconsArray = [
    { id: 0, name: "facebook", link: "#", icon: "fa fa-facebook" },
    { id: 1, name: "twitter", link: "#", icon: "fa fa-twitter" },
    { id: 2, name: "dribbble", link: "#", icon: "fa fa-dribbble" },
    { id: 3, name: "linkedin", link: "#", icon: "fa fa-linkedin" },
  ];
  const categoryArray = [
    { id: 0, name: "Updated", link: "#" },
    { id: 1, name: "Ongoing", link: "#" },
    { id: 2, name: "Finished", link: "#" },
    { id: 3, name: "Adult", link: "#" },
    { id: 4, name: "BL/GL", link: "#" },
    { id: 5, name: "Community", link: "#" },
  ];
  const linkArray = [
    { id: 0, name: "About", link: "#" },
    { id: 1, name: "Contract", link: "#" },
    { id: 2, name: "Contribute", link: "#" },
    { id: 3, name: "Policy", link: "#" },
    { id: 4, name: "Site Map", link: "#" },
  ];
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapper}>
        {/* <div className={styles.top}>
          <div className={styles.logo}>
            <img className={styles.logo_front} src={logo} alt="logo" />
          </div>
          <div className={styles.name}>웹툰모아</div>
        </div> */}
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
              {categoryArray.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.link}>
            <h4>Quick Link</h4>
            <ul>
              {linkArray.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>Copyright © 2099 All Rights not Reserved by Webtoonmoa.</div>
          <ul className={styles.social_icons}>
            {socialIconsArray.map((item) => (
              <li className={styles.icon} key={item.id}>
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
