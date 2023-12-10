import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

//
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-EWMHL8GP5C" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-EWMHL8GP5C');
        `}
          </Script>
        </Head>

        <body>
          <Main />
          <script>var global = global || window;</script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
