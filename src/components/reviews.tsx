import { useEffect, useState } from "react";
import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";

import styles from "../styles/components/reviews.module.scss";
import axios from "axios";

interface ProductData {
  brand: string;
  description: string;
  category: string;
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
  name: string;
  totalRating: number;
}
interface ProductProps {
  productData: ProductData | null;
  reviewData: ReviewData | null;
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

function Reviews({ productData, reviewData }: ProductProps) {
  const [data, setData] = useState<ProductData[]>([]);
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    if (productData /* reviewData */) {
      setData(productData);
      setReviews(reviewData);
      /*       setReviews(reviewData); */
    }
  }, [productData /* reviewData */]);

  if (!data || !reviews) {
    return <div> loading..</div>;
  }
  return (
    <div className={styles.container}>
      <div>
        {reviews.map((item, index) => {
          const isoDate = new Date(item.date);

          const year = isoDate.getFullYear();
          const month = String(isoDate.getMonth() + 1).padStart(2, "0");
          const day = String(isoDate.getDate()).padStart(2, "0");

          const formattedDate = `${year}-${month}-${day}`;

          return (
            <div className={styles.reviewsContainer}>
              <div className={styles.dateAndRatingContainer} key={index}>
                <div className={styles.date}> {formattedDate} </div>
                <div className={styles.stars}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Image
                      src="/star-test.svg"
                      width={20}
                      height={20}
                      alt="information"
                    />
                  ))}
                </div>
              </div>
              <div className={styles.testAlign}>
                <div className={styles.commentSection}>
                  <span className={styles.username}>{item.name}</span>
                  <Image
                    className={styles.speechBubble}
                    src="/bubble.svg"
                    width={24}
                    height={24}
                    alt="speech bubble"
                  />
                </div>
              </div>
              <span className={styles.comment}>{item.comment}</span>
              <p className={styles.prosCons}>
                <span className={styles.bold}>Pros - </span> &nbsp;
                {item.pros}
                <Image
                  src="/pros.svg"
                  className={styles.pros}
                  width={24}
                  height={24}
                  alt="pros"
                />
              </p>
              <p className={styles.prosCons}>
                <span className={styles.bold}>Cons - </span> &nbsp;
                {item.cons}
                <Image
                  src="/cons.svg"
                  className={styles.cons}
                  width={24}
                  height={24}
                  alt="cons"
                />
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles.relatedProducts}>check out products</div>
    </div>
  );
}

export default Reviews;
