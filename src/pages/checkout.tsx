import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { atom, useAtom } from "jotai";
import { shoppingCart, shoppingCartItems } from "../store/store";
import { useState, useEffect } from "react";

export default function checkout() {
  const [cartItems, setCartItems] = useAtom(shoppingCartItems);

  useEffect(() => {
    let value = [];
    // Get the value from local storage if it exists
    value = JSON.parse(localStorage.getItem("checkoutItems")) || [];
    setCartItems(value);
    console.log(cartItems, " cart itesms");
  }, []);
  return (
    <div>
      <Navbar />
      <h1> shopping carts</h1>
      {cartItems.map((item, index) => (
        <>
          <h1 key={index}> {cartItems[index][0].name} </h1>
        </>
      ))}

      <Footer />
    </div>
  );
}
