import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Product from "@/components/product";
import { useRouter } from "next/router";
import axios from "axios";
import { GetServerSideProps } from "next";

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

interface ReviewData {
  // DATA
  id: string;
  name: string;
  comment: string;
  date: Date;
  product: string;
}

interface SlugPageProps {
  productData: ProductData | null;
  reviewData: ReviewData | null;
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { params } = context;
  const { slug } = params as { slug: string }; // Assuming slug is a string

  try {
    const productSlug = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/search/${slug}`;
    const response = await axios.get<ProductData>(productSlug);
    const productData: ProductData = response.data;

    const reviews = `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/search/${productData.id}`;
    const reviewResponse = await axios.get<ReviewData>(reviews);
    const reviewData: ReviewData = reviewResponse.data;

    return {
      props: {
        productData,
        reviewData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        productData: null,
        reviewData: null,
      },
    };
  }
};

const SlugPage: React.FC<SlugPageProps> = ({ productData, reviewData }) => {
  const router = useRouter();
  const { slug } = router.query as { slug: string }; // Assuming slug is a string

  return (
    <div>
      <Navbar />
      <Product productData={productData} reviewData={reviewData} />
      <Footer />
    </div>
  );
};

export default SlugPage;
