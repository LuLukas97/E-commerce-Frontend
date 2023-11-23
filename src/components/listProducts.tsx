import "react-multi-carousel/lib/styles.css";
import styles from "../styles/components/listProducts.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import slugify from "slugify";
import axios from "axios";
import Link from "next/link";
import SortBy from "./sortBy";

function listProducts() {
  const router = useRouter();
  const { category } = router.query;
  const [data, setData] = useState<any[]>([]);

  const [filterCriteria, setFilterCriteria] = useState("");

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const capitalizedCategory: string = capitalizeFirstLetter(category as string);

  async function getData() {
    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL + "/products?category=" + category; // ?category=audio
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function getDataWithFilter(filter: string) {
    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL +
      "/products/search?category=" +
      category +
      "&filterType=" +
      filter;
    try {
      const response = await axios.get(url);

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
    //console.log(data, " DATA");
  }, []);

  return (
    <div>
      <h1 className={styles.category}> {capitalizedCategory} </h1>
      <div className={styles.container}>
        <SortBy category={category as string} onFilter={getDataWithFilter} />
        <div className={styles.flexContainer}>
          {data.map((item, index) => (
            <div key={index}>
              <div className={styles.productContainer}>
                <div className={styles.products}>
                  <Link
                    href={item.category + "/" + item.slug}
                    className={styles.productName}
                  >
                    <img className={styles.img} src={item.image} />

                    <h2 className={styles.productName}>{item.name} </h2>
                    <ul className={styles.sellingList}>
                      <li> {item.bulletedList.list1} </li>
                      <li> {item.bulletedList.list2} </li>
                      <li> {item.bulletedList.list3} </li>
                    </ul>
                  </Link>
                </div>
                <span className={styles.productPrice}>${item.value.price}</span>
                <span className={styles.productPrice__old}>
                  ${item.value.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default listProducts;
