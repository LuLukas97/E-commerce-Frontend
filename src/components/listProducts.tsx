import "react-multi-carousel/lib/styles.css";
import styles from "../styles/listProducts.module.scss";
import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

function listProducts() {
  const [data, setData] = useState<any[]>([]);

  async function getData() {
    const url = "http://localhost:8080/products/all";
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {data.map((item, index) => (
            <div key={index}>
              <div className={styles.test1}>
                <div className={styles.products}>
                  <a href={item.id} className={styles.productName}>
                    <img className={styles.img} src={item.image} />
                    {/*  <h5>{item.id}</h5> */}
                    <p className={styles.text}>
                      <li className={styles.li}>
                        <li> Hej</li>
                        <li> Hej</li>
                        <li> Hej</li>
                      </li>
                    </p>
                    <p className={styles.productName}>{item.name} </p>
                    {/* Add more as needed */}
                  </a>
                </div>
                <p className={styles.productPrice}>${item.value.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default listProducts;
