import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
/* import Carousel from "react-bootstrap/Carousel"; */
import Carousel from "../../components/carousel";
/* import "../components/carousel.css"; */
import Filter from "../../components/filter";
import Carousell from "../../components/newCarousel";
import ListProducts from "../../components/listProducts";

import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <ListProducts />
      <Footer />
    </div>
  );
};

export default Home;
