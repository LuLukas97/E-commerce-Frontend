import React, { useEffect, useState } from "react";
import styles from "../styles/components/reviews.module.scss";

interface ProductData {
  brand: string;
  description: string;
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
}

function reviews({ productData }: ProductProps) {
  const [data, setData] = useState<ProductData[]>([]);

  useEffect(() => {
    setData(productData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.reviewsContainer}>
        <div> {/* {data.reviews} */} </div>
        <div> hej </div>
      </div>

      <div className={styles.relatedProducts}>check out products</div>
    </div>
  );
}
export default reviews;
