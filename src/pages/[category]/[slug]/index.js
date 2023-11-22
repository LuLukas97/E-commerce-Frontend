import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Product from "@/components/product";
import { useRouter } from "next/router";
import axios from "axios";

export default function SlugPage({ productData }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Navbar />
      <Product productData={productData} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/search/${slug}`;
    const response = await axios.get(url);
    const productData = response.data;

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
}
