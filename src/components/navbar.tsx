import React from "react";
import styles from "../styles/components/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
import { useAtom } from "jotai";
import { shoppingCart } from "../store/store";
import Link from "next/link";
import Login from "./Login";

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
          {/* <Image src="/user-solid.svg" width={24} height={24} alt="user" /> */}
          {/* <span className={styles.navbar__text}>Login</span> */}
          <Login />
        </div>
        <Link href="/checkout">
          <div className={styles.icon}>
            <Image
              src="/bag-shopping-solid.svg"
              width={24}
              height={24}
              alt="information"
            />
            <span className={styles.navbar__text}>Shopping cart ({cart})</span>
          </div>
        </Link>
      </div>
      <div className={styles.navbar}>
        <h1 className={styles.headerTitle}>
          {/*  <a href="/">FitFly</a> */}
          <Link href="/">
            <Image src="/logo.png" width={214} height={150} alt="logo" />
          </Link>
        </h1>

        <input
          className={styles.navbar__search}
          type="text"
          placeholder="Search for something.."
        ></input>
      </div>
      <p className={styles.freeShipping}>
        * Free shipping with orders above $50.00
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
