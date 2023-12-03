import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { atom, useAtom } from "jotai";
import { shoppingCart, shoppingCartItems } from "../store/store";
import { useState, useEffect } from "react";
import styles from "../styles/components/checkout.module.scss";
import Image from "next/image";
import { atomWithStorage, RESET } from "jotai/utils";

export default function checkout() {
  const [cartItems, setCartItems] = useAtom(shoppingCartItems);
  const [freeShipping, setFreeShipping] = useState<String>("");
  const [totalPrice, setTotalPrice] = useState<number>();
  const [cart, setCart] = useAtom(shoppingCart);
  const [newPrice, setNewPrice] = useState<number>();

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
      let priceUntilFreeShipping = priceForFreeShipping - totalPrice;
      setFreeShipping(
        `You've got $${priceUntilFreeShipping.toFixed(
          2
        )} left until free shipping!`
      );
    } else {
      setFreeShipping("You've got free shipping!");
    }
  };

  const removeProduct = (itemID) => {
    console.log(itemID, " FUNCTION");
    const updatedArrays = cartItems.filter((arr) => arr[0].id !== itemID);
    setCartItems(updatedArrays);

    setCart((c) => c - 1);
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
            console.log(item[0], " ITEM");

            return (
              <>
                <div className={styles.checkout__productPicture} key={index}>
                  <div>
                    <Image
                      className={styles.productImage}
                      src={item[0].images.img1}
                      width={124}
                      height={124}
                      alt="preview picture product"
                    />
                  </div>
                  <div className={styles.checkout__productInfo}>
                    {/* Product info */}
                    <h4> {item[0].name} </h4>
                    <h4>
                      $
                      {item[0].value.status
                        ? newPrice?.toFixed(2)
                        : item[0].value.price}
                      {/* TODO: Round up to nearest number more consistently */}
                    </h4>
                    {/* <h4> ${item[0].value.price}</h4> */}
                  </div>
                  <div>
                    <h2
                      onClick={() => removeProduct(item[0].id)}
                      className={styles.removeProduct}
                    >
                      X
                    </h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* Below here is login / checkout right side */}
        <div className={styles.payment}>
          {/* <span>{freeShipping}</span> */}
          {/* TODO: replace with state and see if free shipping or not */}
          <div className={styles.payment__container}>
            <div className={styles.btnCenter}>
              <button className={styles.btn} onClick={() => handleLogin()}>
                Login
              </button>
            </div>
            <div className={styles.payment__price}>
              <p>Price: ${totalPrice} </p>
              {/* TODO: Calculate new totalPrice when products have discounts */}

              <p>Shipping: {freeShipping}</p>
            </div>
            <p className={styles.line}> </p>
            <div className={styles.payment__price}>
              <p>Total: {totalPrice} </p>
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
