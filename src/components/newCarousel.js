import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/components/carousel.module.scss";
import { React, useState, useEffect } from "react";
import axios from "axios";

function newCarousel() {
  const [data, setData] = useState([]);

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.wrapper}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
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
      </Carousel>
    </div>
  );
}
export default newCarousel;
