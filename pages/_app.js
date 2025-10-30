import "@/styles/globals.css";
// import { GoogleTagManager } from "@next/third-parties/google";
// const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
import { Toaster } from "react-hot-toast";
import GTMLogin from "@/components/GTMLogin";
import Script from "next/script";
const GA_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { debug_mode: true });
          `,
        }}
      />
      <Component {...pageProps} />
      {/* <GoogleTagManager gtmId={GTM_ID} /> */}
      <Toaster />
      {/* <GTMLogin /> */}
    </>
  );
}
