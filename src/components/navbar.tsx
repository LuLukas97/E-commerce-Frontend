import React from "react";
import styles from "../styles/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faBagShopping,
  faUser,
  faLocationDot,
  faCircleInfo,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
import { useAtom } from "jotai";
import { shoppingCart } from "../store/store";

const Home: NextPage = () => {
  const [cart, setCart] = useAtom(shoppingCart);

  return (
    <div>
      <div className={styles.navbar__primary}>
        <div className={styles.icon}>
          <Image
            src="/location-dot-solid.svg"
            width={24}
            height={24}
            alt="marker"
          />

          <span className={styles.navbar__text}>Find closest store</span>
        </div>
        <div className={styles.icon}>
          <Image
            src="/circle-info-solid.svg"
            width={24}
            height={24}
            alt="information"
          />
          <span className={styles.navbar__text}>Customer Support</span>
        </div>
        <div className={styles.item3}></div>
        <div className={styles.icon}>
          <Image src="/user-solid.svg" width={24} height={24} alt="user" />
          <span className={styles.navbar__text}>Login</span>
        </div>
        <div className={styles.icon}>
          <Image
            src="/bag-shopping-solid.svg"
            width={24}
            height={24}
            alt="information"
          />
          <span className={styles.navbar__text}>Shopping cart ({cart})</span>
        </div>
      </div>
      <div className={styles.navbar}>
        <h1 className={styles.headerTitle}>
          <a href="/">FitFly</a>
        </h1>

        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
        <input
          className={styles.navbar__search}
          type="text"
          placeholder="Search for something.."
        ></input>
      </div>
      <p className={styles.freeShipping}>
        * Free shipping in Europe with orders above 599,00kr
      </p>
      <div className={styles.navbar__menu}>
        <span>
          <a href="/electronics">Electronics</a>
        </span>
        <span>
          <a href="/computers">Computers</a>
        </span>
        <span>
          <a href="/audio">Audio</a>
        </span>
        <span>
          <a href="/monitors">Monitors</a>
        </span>
        <span>
          <a href="/accessories">Accessories</a>
        </span>
        <span>
          <a href="/camera">Camera</a>
        </span>
      </div>
    </div>
  );
};

export default Home;
