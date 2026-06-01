import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
}
