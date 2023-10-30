import React from "react";
import styles from "../styles/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faLocationDot,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
  return (
    <div>
      <div className={styles.navbar__primary}>
        <div>
          {" "}
          <FontAwesomeIcon icon={faLocationDot} />
          Find closest store
        </div>
        <div>
          <FontAwesomeIcon icon={faCircleInfo} />
          Customer Support
        </div>
        <div className={styles.item3}></div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          Login
        </div>
        <div>
          <FontAwesomeIcon icon={faBagShopping} />
          Shopping cart (0)
        </div>
      </div>
    </div>
  );
}
