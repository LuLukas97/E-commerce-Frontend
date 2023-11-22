import "react-multi-carousel/lib/styles.css";
import styles from "../styles/listProducts.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";

function listProducts() {
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const router = useRouter();
  const { category } = router.query;
  const capitalizedCategory: string = capitalizeFirstLetter(category as string);
  const [data, setData] = useState<any[]>([]);

  async function getData() {
    const url = "http://localhost:8080/products?category=" + category; // ?category=audio
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
      <h1 className={styles.category}> {capitalizedCategory} </h1>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {data.map((item, index) => (
            <div key={index}>
              <div className={styles.productContainer}>
                <div className={styles.products}>
                  <a href={item.id} className={styles.productName}>
                    <img className={styles.img} src={item.image} />
                    <h5 className={styles.hoverText}>
                      <ul className={styles.sellingList}>
                        <li> Hej</li>
                        <li> Hej</li>
                        <li> Hej</li>
                      </ul>
                    </h5>
                    <h2 className={styles.productName}>{item.name} </h2>
                    <h5> Product text </h5>
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
