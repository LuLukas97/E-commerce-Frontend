import React from "react";
import styles from "../styles/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faLocationDot,
  faCircleInfo,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "../redux/store/authSlice";

const Home: NextPage = () => {
  /* const itemsInCart: any = useSelector(getItemsInCart);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    dispatch(setItemsInCart(parseInt(itemsInCart) + 1));
  }; */

  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.navbar__primary}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className={styles.navbar__text}>Find closest store</span>
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCircleInfo} />
          <span className={styles.navbar__text}>Customer Support</span>
        </div>
        <div className={styles.item3}></div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
          <span className={styles.navbar__text}>Login</span>
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faBagShopping} />
          <span className={styles.navbar__text}>
            Shopping cart {/* ({itemsInCart}) */}
          </span>
        </div>
      </div>
      <div className={styles.navbar}>
        <h1 className={styles.headerTitle}> FitFly</h1>

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
        <span> Woman </span>
        <span> Men </span>
        <span> Sport </span>
        <span> Shoes </span>
        <span> Accessories </span>
        <span> Discount </span>
      </div>

      {/*       <>
        <h2>Items in Cart : {itemsInCart}</h2>
        <button value="Add" type="button" onClick={addItemsToCart}>
          Add
        </button>
      </> */}
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  );
};

/* export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      await store.dispatch(setAuthState(false));

      console.log("State on server", store.getState());

      return {
        props: {
          authState: false,
        },
      };
    }
);
 */
export default Home;
