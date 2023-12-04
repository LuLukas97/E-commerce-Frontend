import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useStore } from "react-redux";
import "../styles/carousel.css";
import { FC } from "react";
import { Provider } from "jotai";
import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}

export default App;

/* export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
 */
