import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import MotionProvider from "@/components/providers/MotionProvider";
import {
  calculatorImageSrc,
  defaultMetadata,
  faqVideoSrc,
  faqVideoSrcMobile,
  heroVideoSrc,
  heroVideoSrcMobile,
  howItWorksImageSrc,
} from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href={heroVideoSrc}
          as="video"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          href={heroVideoSrcMobile}
          as="video"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <link
          rel="prefetch"
          href={faqVideoSrc}
          as="video"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <link
          rel="prefetch"
          href={faqVideoSrcMobile}
          as="video"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <link rel="preload" href={calculatorImageSrc} as="image" type="image/jpeg" />
        <link rel="preload" href={howItWorksImageSrc} as="image" type="image/jpeg" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}>
        <MotionProvider>{children}</MotionProvider>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {clarityId ? (
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
