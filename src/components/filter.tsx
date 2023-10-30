import React from "react";
import styles from "../styles/filter.module.scss";

export default function filter() {
  return (
    <div className={styles.wrapper}>
      <button>Woman</button>
      <button>Men</button>
      <button>Sport</button>
      <button>Shoes</button>
      <button>Accessories</button>
      <button>Discount</button>
    </div>
  );
}
