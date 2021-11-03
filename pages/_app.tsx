import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default appWithTranslation(App);
