import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { atom, useAtom } from "jotai";
import { shoppingCart, shoppingCartItems } from "../store/store";
import { useState, useEffect } from "react";
import styles from "../styles/components/checkout.module.scss";
import Image from "next/image";
import { atomWithStorage, RESET } from "jotai/utils";
import Link from "next/link";

export default function Checkout() {
  const [cartItems, setCartItems] = useAtom(shoppingCartItems);
  const [shippingCost, setShippingCost] = useState<any>(""); // Free or $5.99
  const [freeShipping, setFreeShipping] = useState<String>("");
  const [totalPrice, setTotalPrice] = useState<number>();
  const [cart, setCart] = useAtom(shoppingCart);
  const [newPrice, setNewPrice] = useState<number>();
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    let value = [];
    // Get the value from local storage if it exists
    value = JSON.parse(localStorage.getItem("checkoutItems")) || [];
    setCartItems(value);

    calculatePrice();
  }, []);

  const calculatePrice = () => {
    let totalPrice = 0;
    let priceForFreeShipping = 50;

    for (let i = 0; i < cartItems.length; i++) {
      const nestedArray = cartItems[i];
      for (let j = 0; j < nestedArray.length; j++) {
        const product = nestedArray[j];
        const price = parseFloat(product.value.price);

        if (product.value.status == true) {
          let discount = "0." + product.value.discount;
          let price = product.value.price;
          let discountedPrice = price * discount;

          setNewPrice(price - discountedPrice);
          console.log(newPrice);
        }
        if (!isNaN(price)) {
          totalPrice += price;
        }
      }
    }

    setTotalPrice(totalPrice.toFixed(2)); // Set the total price as a formatted string

    if (totalPrice < priceForFreeShipping) {
      // om price for free shipping är lägre än total price (shipping cost)
      let priceUntilFreeShipping = priceForFreeShipping - totalPrice;

      setPrice(totalPrice.toFixed(2));
      totalPrice = totalPrice + 5.99;
      setTotalPrice(totalPrice);

      setShippingCost("$5.99");
      setFreeShipping(
        `You've got $${priceUntilFreeShipping.toFixed(
          2
        )} left until free shipping!`
      );
    } else {
      setPrice(totalPrice.toFixed(2));
      setShippingCost("Free!");
      setFreeShipping("You've got free shipping!");
    }
  };

  const removeProduct = (itemID) => {
    console.log(itemID, " ----- TO REMOVE");
    const updatedArrays = cartItems.filter((arr) => arr[0].id !== itemID);
    console.log(updatedArrays, " UPDATED ARRAYS ");
    /*  setCartItems(updatedArrays);

    setCart((c) => c - 1); */
    console.log(cartItems, " AFTER");
  };

  const handleLogin = () => {
    console.log("btn");
  };
  useEffect(() => {
    calculatePrice(); // Run the calculation when cartItems change
  }, [cartItems]);
  return (
    <div>
      <Navbar />
      <h1> shopping carts</h1>
      <div className={styles.checkout}>
        {/* Below here is summary / checkout left side */}
        <div className={styles.checkout__productContainer}>
          {cartItems.map((item, index) => {
            console.log(item, " ITEM");

            return (
              <>
                <div className={styles.checkout__productPicture} key={index}>
                  <div className={styles.product}>
                    {/* <div> */}
                    <Link href={item.category + "/" + item.slug}>
                      <Image
                        className={styles.productImage}
                        src={item.images.img1}
                        width={124}
                        height={124}
                        alt="preview picture product"
                      />
                    </Link>
                    {/*  </div> */}
                  </div>
                  <div className={styles.checkout__productInfo}>
                    {/* Product info */}
                    {/*                     <p className={styles.product__title}> {item[0].name} </p>
                    <ul>
                      <li>- {item[0].bulletedList.list1}</li>
                      <li>- {item[0].bulletedList.list2}</li>
                      <li>- {item[0].bulletedList.list3}</li>
                    </ul>
                    <p className={styles.product__price}>
                      $
                      {item[0].value.status
                        ? newPrice?.toFixed(2)
                        : item[0].value.price} */}
                    {/* TODO: Round up to nearest number more consistently */}
                    {/*                     </p> */}
                  </div>
                  <div className={styles.removeItemContainer}>
                    {/*                     <h2
                      onClick={() => removeProduct(item[0].id)}
                      className={styles.removeProduct}
                    >
                      X
                    </h2> */}
                    <div className={styles.addDecreamentCounter}>
                      <div>- </div>
                      <div>1</div>
                      <div> +</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* Below here is login / checkout right side */}
        <div className={styles.payment}>
          <span>{freeShipping}</span>
          {/* TODO: replace with state and see if free shipping or not */}
          <div className={styles.payment__container}>
            <div className={styles.btnCenter}>
              <button className={styles.btn} onClick={() => handleLogin()}>
                Login
              </button>
            </div>
            <div className={styles.payment__price}>
              <p>Price: ${price} </p>
              {/* TODO: Calculate new totalPrice when products have discounts */}

              <p>Shipping: {shippingCost}</p>
            </div>
            <p className={styles.line}> </p>
            <div className={styles.payment__price}>
              <p>Total: ${totalPrice} </p>
            </div>

            <div className={styles.btnCenter}>
              <button className={styles.btn} onClick={() => handleLogin()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
