import Script from "next/script";
import "../globals.scss";
import type { Metadata } from "next";
type Props = {
  children: React.ReactNode;
};

export default function ViewLayout({ children }: Props) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EWMHL8GP5C" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-EWMHL8GP5C');
        `}
      </Script>
      {children}
    </>
  );
}
