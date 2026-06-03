import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ToolSection from "@/components/sections/ToolSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ToolDetailSection from "@/components/sections/ToolDetailSection";
import FAQSection from "@/components/sections/FAQSection";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getOrganizationSchema,
  getWebApplicationSchema,
  jsonLd,
} from "@/lib/seo-schemas";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Six-Fold Bet Calculator | TJK Payout Estimator",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Six-Fold Bet Calculator | TJK Payout Estimator",
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(getOrganizationSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(getWebApplicationSchema())}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(getFaqSchema())} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(getBreadcrumbSchema())}
      />
      <Header />
      <main className="home-main">
        <HeroSection />
        <ToolSection />
        <HowItWorksSection />
        <ToolDetailSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
