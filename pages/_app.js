import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={GTM_ID} />
      <Toaster />
    </>
  );
}
