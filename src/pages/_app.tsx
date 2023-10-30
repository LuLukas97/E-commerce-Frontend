import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import "../styles/carousel.css";

function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}
export default wrapper.withRedux(MyApp);
