import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "WiSchool",
  description: "Quality education by any means necessary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
