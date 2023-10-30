import React from "react";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
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
