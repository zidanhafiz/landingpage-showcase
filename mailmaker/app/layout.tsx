import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/utils/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MailMaker",
  description: "Start increasing your marketing efforts in just a few minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
