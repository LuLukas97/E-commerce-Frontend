import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/router";
import axios from "axios";

function Product({ productData }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(productData);
  return (
    <div>
      <h1>Product: {slug} </h1>
      <h5>{productData.brand}</h5>
      <h5>{productData.description}</h5>
      <h5>Price: {productData.value.price} $</h5>
      <h5>{productData.name}</h5>
    </div>
  );
}

export default Product;
