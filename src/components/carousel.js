import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/carousel.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import { React, useState, useEffect } from "react";

function UncontrolledExample() {
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");

  // Change this useEffect to Redux instead,
  // a lot easier on the performance in the long run
  useEffect(() => {
    if (index === 0) {
      setDetails("199kr");
      setBrand("Levi's");
      setName("Shirt");
    }
    if (index === 1) {
      setDetails("599kr");
      setBrand("HM");
      setName("Jacket");
    }
    if (index === 2) {
      setDetails("10099kr");
      setBrand("Levi's");
      setName("Shirt");
    }
  }, [index]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.wrapper}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon changed"
          />
        }
      >
        <Carousel.Item interval={4500}>
          <img
            className={styles.img}
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            text="First slide"
          />

          <Carousel.Caption>
            {/*             <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={450000000}>
          <img
            className={styles.img}
            src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
            /*             className={styles.banner} */
            text="Second slide"
          />
          <Carousel.Caption>
            {/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={28000500}>
          <img
            className={styles.img}
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            /*             className={styles.banner} */
            text="Third slide"
          />
          <Carousel.Caption>
            {/*             <h3 className={styles.h3}>599,00kr</h3>
             */}{" "}
            {/*             <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h6 className={styles.h3}>{details} </h6>
      <h6 className={styles.h3}>{brand} </h6>
      <h6 className={styles.h3}>{name} </h6>
    </div>
  );
}

export default UncontrolledExample;
