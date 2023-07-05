import type { AppProps } from 'next/app'
import "../styles/tailwind.css";
import "../styles/slick.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default MyApp;
