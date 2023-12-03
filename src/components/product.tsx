"use client";
import { useRouter } from "next/router";
import styles from "../styles/components/product.module.scss";
import Image from "next/image";
import React from "react";
import Reviews from "./reviews";
import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { shoppingCart, shoppingCartItems } from "../store/store";

interface ProductData {
  brand: string;
  description: string;
  value: {
    price?: string;
    discount?: string;
    status?: boolean;
  };
  bulletedList: {
    list1: string;
    list2: string;
    list3: string;
  };
  images: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
  category: string;
  name: string;
  totalRating: number;
}
interface ReviewData {
  // DATA
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: Date;
  product: string;
  pros: string;
  cons: string;
}
interface ProductProps {
  productData: ProductData;
  reviewData: ReviewData | null;
}

function Product({ productData, reviewData }: ProductProps) {
  const [data, setData] = useState<ProductData[]>([]);
  const [reviews, setReviews] = useState<ProductData[]>([]);

  const [productImg, setProductImg] = useState<string>();
  const [ratings, setRatings] = useState<any[]>([]);
  const [activeImageKey, setActiveImageKey] = useState<string | null>(null);
  const [addToCart, setAddToCart] = useState<ProductData[]>([]);
  const [addToCartText, setAddToCartText] = useState<string>("Add to cart");
  const [cart, setCart] = useAtom(shoppingCart);
  const [cartItems, setCartItems] = useAtom(shoppingCartItems);

  useEffect(() => {
    setData(productData);
    setReviews(reviewData);
    setProductImg(productData?.images.img1);
    setRatings(productData?.totalRating);
    /* let value;
    value = localStorage.getItem("checkoutItems") || ""; */
    /* console.log(value, " value"); */
  }, []);

  function handleClick(imageKey: string) {
    setProductImg(productData?.images[imageKey]);
    setActiveImageKey(imageKey);
  }
  const handleAddToCart = (item) => {
    setAddToCartText("✓");
    setCart((c) => c + 1);
    setCartItems([...cartItems, [item]]); // Add a new array for the new item
    //setCartItems(item);

  };

  if (
    !productData ||
    !reviews ||
    !data ||
    !productData.images ||
    !productImg ||
    !ratings
  ) {
    return <div>Loading...</div>; // TODO: SSR + handle if product doesnt have a review, currently doesn't load site at all with no reviews
  }
  return (
    <div>
      <div className={styles.productContainer}>
        <div className={styles.product}>
          <h1 className={styles.productTitle}>{productData.name}</h1>
          <div className={styles.rating}>
            {Array.from({ length: productData.totalRating }).map((_, index) => (
              <div className={styles.stars} key={index}>
                <Image
                  src="/star-test.svg"
                  width={18}
                  height={18}
                  alt="information"
                />
              </div>
            ))}
            <div className={styles.ratings}>
              <h3>
                {productData.totalRating}/5 | {productData.totalRating} reviews
              </h3>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productPrice}>
                <p>${productData.value.price}</p>
                <p>$old price</p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.bulletedList}>
              <p>* {productData.bulletedList.list1}</p>
              <p>* {productData.bulletedList.list2}</p>
              <p>* {productData.bulletedList.list3}</p>
            </div>
          </div>
          <section className={styles.productDescription}>
            Raspberry Pi is a series of small single-board computers developed
            in the United Kingdom by the Raspberry Pi Foundation in association
            with Broadcom. The Raspberry Pi project originally leaned toward the
            promotion of teaching basic computer science in schools.Raspberry Pi
            is a series of small single-board computers developed in the United
            Kingdom by the Raspberry Pi Foundation in association with Broadcom.
            {productData.description}
          </section>
        </div>

        <div className={styles.productImage}>
          {/* <Image
            src={productImg}
            width={400}
            height={400}
            alt="product image"
          /> */}
          <div>
            <img src={productImg} alt="product image" className={styles.img} />
          </div>
          <div className={styles.productImage__preview}>
            {Object.keys(productData.images).map(
              (imageKey: string, index: number) => (
                <div key={index} onClick={() => handleClick(imageKey)}>
                  <Image
                    src={productData.images[imageKey]}
                    width={64}
                    height={48}
                    alt="product image mini"
                    style={{
                      borderBottom:
                        activeImageKey === imageKey ? "2px solid blue" : "none",
                    }}
                  />
                </div>
              )
            )}
          </div>
          <div>
            <button
              className={styles.btn}
              onClick={() => handleAddToCart(productData)}
            >
              {addToCartText}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.linebreak}></div>
      <Reviews productData={productData} reviewData={reviews} />
    </div>
  );
}

export default Product;
