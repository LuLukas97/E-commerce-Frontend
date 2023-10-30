import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/footer.module.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
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
