import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
/* import Carousel from "react-bootstrap/Carousel"; */
/* import "../components/carousel.css"; */
import Filter from "../components/filter";
import Carousell from "../components/newCarousel";
import AllProducts from "../components/allProducts";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Carousell /> */}
      <AllProducts />
      <Filter />
      <Footer />
    </div>
  );
};

/* export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      await store.dispatch(setAuthState(false));

      console.log("State on server", store.getState());

      return {
        props: {
          authState: false,
        },
      };
    }
);
 */
export default Home;
