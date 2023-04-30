  import Header from '@components/Header';
  import Footer from '@components/Footer';
  import Script from 'next/script';
  import '@styles/globals.scss';
  import React , { Suspense } from 'react';

  function MyApp({ Component, pageProps }) {

    return (
      <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'GA_MEASUREMENT_ID');
              `}
        </Script>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Suspense>
      </>
    );
  }

  export default MyApp;






