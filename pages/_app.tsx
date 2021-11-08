import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import "../lib/styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default appWithTranslation(App);
