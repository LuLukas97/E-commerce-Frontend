import React from "react";
import styles from "../styles/footer.module.scss";

export default function footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <h1 className={styles.wrapper__title}> FitFly</h1>
        <div className={styles.footer}>
          <span> Woman </span>
          <span> Men </span>
          <span> Sport </span>
          <span> Shoes </span>
          <span> Accessories </span>
          <span> Discount </span>
        </div>
        <div className={styles.menu}>
          <a href="https://www.linkedin.com/in/lukas-lundblad/">
            <span> LinkedIn </span>
          </a>
          <a href="https://github.com/LuLukas97">
            <span> Github </span>
          </a>
          <a href="https://lukaslundblad.vercel.app/">
            <span> Portfolio </span>
          </a>
        </div>
      </div>
    </footer>
  );
}