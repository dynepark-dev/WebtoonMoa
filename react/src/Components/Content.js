import React from "react";
import styles from "../Styles/Content.module.scss";
import { Link } from "react-router-dom";

function Content({ props }) {
  const { headline, subhead, link1, link2, image, alt } = props;
  return (
    <div className={styles.Content}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.headline}>{headline}</h2>
          <h3 className={styles.subhead}>{subhead}</h3>
          <div className={styles.link}>
            <Link to={link1}>Ongoing</Link>
            <Link to={link2}>Completed</Link>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}

export default Content;
