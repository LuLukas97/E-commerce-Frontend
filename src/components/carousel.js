import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/index.module.scss";
import "../styles/carousel.css";

function UncontrolledExample() {
  return (
    <Carousel
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon changed"
        />
      }
    >
      <Carousel.Item>
        <img src="switch.png" className={styles.banner} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="mario_banner.png"
          className={styles.banner}
          text="Second slide"
        />
        <Carousel.Caption>
          {/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="mario_banner.png"
          className={styles.banner}
          text="Third slide"
        />
        <Carousel.Caption>
          {/*           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
