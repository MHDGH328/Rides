import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../Components/layout/navbar";
import "antd/dist/antd.css";
import { user } from "../../rides";
import "../../styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar name={user.user_name} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
