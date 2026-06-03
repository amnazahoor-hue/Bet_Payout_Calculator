import type { Metadata } from "next";

export const siteConfig = {
  name: "AltılıBahis",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://altilibahis.com",
  description:
    "Free TJK six-fold bet payout calculator. Enter the prize pool and number of winners to see the estimated payment per ticket instantly.",
  locale: "en_US",
  twitterHandle: "@altilibahis",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Six-Fold Bet Calculator | TJK Payout Estimator",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "six-fold bet calculator",
    "TJK altılı",
    "horse racing payout",
    "prize pool calculator",
    "altılı bahis hesaplama",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    title: "Six-Fold Bet Calculator | TJK Payout Estimator",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Six-Fold Bet Calculator | TJK Payout Estimator",
    description: "Free, instant TJK six-fold bet payout estimates per winning ticket.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
  },
};

export const heroVideoSrc = "/images/horse-sprite.mp4";
export const heroVideoSrcMobile = "/images/horse-sprite-mobile.mp4";
export const faqVideoSrc = "/images/horse-sprite-3.mp4";
export const faqVideoSrcMobile = "/images/horse-sprite-3-mobile.mp4";
export const calculatorImageSrc = "/images/calculator-bg.jpg";
export const howItWorksImageSrc = "/images/how-it-works-horse.jpg";
export const horseSpriteSvgSrc = "/images/horse-sprite.svg";
