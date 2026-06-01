import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AltılıBahis",
  description: "Contact the AltılıBahis calculator team with questions or feedback.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
