import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Filter from "../components/filter";
import Carousell from "../components/newCarousel";
import ListProducts from "../components/listProducts";
import { useRouter } from "next/router";

// Dummy data for categories (to simulate fetching from backend)
const categoriesData = {
  electronics: { name: "Electronics", description: "Electronics category" },
  computers: { name: "Computers", description: "Computers category" },
  audio: { name: "Audio", description: "Audio category" },
  monitors: { name: "Monitors", description: "Monitors category" },
  accessories: { name: "Accessories", description: "Accessories category" },
  camera: { name: "Camera", description: "Camera category" },
};

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  // Check if the category is valid
  if (!categoriesData[category]) {
    return <h1>404 - Page Not Found</h1>;
  }
  // TODO create a proper 404 page

  // If the category is valid, render the category information
  const { name, description } = categoriesData[category];

  return (
    <div>
      <Navbar />

      <ListProducts />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  // Simulate fetching category data from a backend using the category parameter
  // Replace this with your actual backend logic to fetch data

  // API REQUEST TO BACKEND HERE!!
  const categoryData = categoriesData[category] || null;

  return {
    props: {
      categoryData,
    },
  };
}

export default Category;
