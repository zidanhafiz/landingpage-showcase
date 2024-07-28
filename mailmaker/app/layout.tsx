import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MailMaker",
  description: "Start increasing your marketing efforts in just a few minutes.",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: "MailMaker",
    description: "Start increasing your marketing efforts in just a few minutes.",
    siteName: "MailMaker",
    images: [
      {
        url: "./opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MailMaker",
      },
      {
        url: "./opengraph-image.png",
        width: 800,
        height: 600,
        alt: "MailMaker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={spaceGrotesk.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

