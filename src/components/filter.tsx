import React from "react";
import styles from "../styles/filter.module.scss";

export default function filter() {
  return (
    <div className={styles.wrapper}>
      <button>Electronics</button>
      <button>Computers</button>
      <button>Audio</button>
      <button>Monitors</button>
      <button>Accessories</button>
      <button>Camera & Photo </button>
    </div>
  );
}
