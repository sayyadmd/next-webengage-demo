// /pages/_app.js
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Load GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }

            // Initialize GA4
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              debug_mode: true, // Marks all hits as debug
              send_page_view: false, // Prevent duplicate pageviews if tracking manually
            });
          `,
        }}
      />

      {/* App content */}
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
