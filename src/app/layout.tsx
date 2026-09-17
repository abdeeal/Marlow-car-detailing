import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: "/brand/mark.svg", shortcut: "/brand/mark.svg" },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
