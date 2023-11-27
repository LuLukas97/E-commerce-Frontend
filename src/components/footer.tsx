import React from "react";
import styles from "../styles/components/footer.module.scss";
import Image from "next/image";

export default function footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <h1 className={styles.headerTitle}>
          {/*  <a href="/">FitFly</a> */}
          <Image src="/logo.png" width={214} height={150} alt="logo" />
        </h1>
        {/* <h1 className={styles.wrapper__title}> FitFly</h1> */}
        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <span> Electronics </span>
            <span> Computers </span>
            <span> Audio </span>
            <span> Monitors </span>
            <span> Accessories </span>
            <span> Camera & Photo </span>
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
        </div>
      </div>
    </footer>
  );
}
