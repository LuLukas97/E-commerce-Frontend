import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useStore } from "react-redux";
import "../styles/carousel.css";
import { FC } from "react";
import { Provider } from "jotai";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

/* export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
 */
