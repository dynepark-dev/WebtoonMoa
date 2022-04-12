import React, { useState } from "react";
import styles from "../Styles/Filter.module.scss";

function Filter({ initial, array, clear }) {
  const [data, setData] = useState(initial);

  function toggleButton(item) {
    data.includes(item)
      ? setData([...data, item].filter((x) => x !== item))
      : setData([...data, item].filter((x) => x !== clear));
  }

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
