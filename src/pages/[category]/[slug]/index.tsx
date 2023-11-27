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

interface SlugPageProps {
  productData: ProductData | null;
}

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async (
  context
) => {
  const { params } = context;
  const { slug } = params as { slug: string }; // Assuming slug is a string

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/search/${slug}`;
    const response = await axios.get<ProductData>(url);
    const productData: ProductData = response.data;

    return {
      props: {
        productData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        productData: null,
      },
    };
  }
};

const SlugPage: React.FC<SlugPageProps> = ({ productData }) => {
  const router = useRouter();
  const { slug } = router.query as { slug: string }; // Assuming slug is a string

  return (
    <div>
      <Navbar />
      <Product productData={productData} />
      <Footer />
    </div>
  );
};

export default SlugPage;
