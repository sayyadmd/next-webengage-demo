import Head from "next/head";
const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const NEXT_PUBLIC_ENV = process.env.NEXT_PUBLIC_ENV;
const NEXT_PUBLIC_GTM_AUTH = process.env.NEXT_PUBLIC_GTM_AUTH;
const NEXT_PUBLIC_GTM_PREVIEW = process.env.NEXT_PUBLIC_GTM_PREVIEW;
const NEXT_PUBLIC_GTM_COOKIES = process.env.NEXT_PUBLIC_GTM_COOKIES;
const isLowerEnv = NEXT_PUBLIC_ENV !== "prod";
function getScript() {
  return `(function(w,d,s,l,i,auth,preview,cookies,isLowerEnv){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer' ? '&l='+l : '',
      env = '';

  if (isLowerEnv&&auth && preview && cookies) {
    env = '&gtm_auth=' + auth + '&gtm_preview=' + preview + '&gtm_cookies_win=' + cookies;
  }

  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+env;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',
   '${NEXT_PUBLIC_GTM_ID}',
   '${NEXT_PUBLIC_GTM_AUTH || ""}',
   '${NEXT_PUBLIC_GTM_PREVIEW || ""}',
   '${NEXT_PUBLIC_GTM_COOKIES || ""}',
   ${isLowerEnv},
);`;
}

function getNoscript() {
  const base = `https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}`;

  const envParams =
    isLowerEnv &&
    NEXT_PUBLIC_GTM_AUTH &&
    NEXT_PUBLIC_GTM_PREVIEW &&
    NEXT_PUBLIC_GTM_COOKIES
      ? `&gtm_auth=${NEXT_PUBLIC_GTM_AUTH}&gtm_preview=${NEXT_PUBLIC_GTM_PREVIEW}&gtm_cookies_win=${NEXT_PUBLIC_GTM_COOKIES}`
      : "";

  return `<iframe src="${base}${envParams}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
}

export default function GTMLogin() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: getScript(),
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: getNoscript(),
        }}
      />
    </>
  );
}
