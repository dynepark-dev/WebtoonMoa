import React from "react";
import styles from "../Styles/Filter.module.scss";

function Filter({ array, clear, data, setData }) {
  function toggleButton(item) {
    data.includes(item)
      ? setData([...data, item].filter((x) => x !== item))
      : setData([...data, item].filter((x) => x !== clear));
  }
  data.length === 0 && setData([clear]);

  return (
    <ul className={styles.Filter}>
      <li
        className={data.includes(clear) ? styles.selected : ""}
        onClick={() => setData([clear])}
      >
        {clear}
      </li>
      {array.map((item) => (
        <li
          key={item}
          className={data.includes(item) ? styles.selected : ""}
          onClick={() => toggleButton(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Filter;
