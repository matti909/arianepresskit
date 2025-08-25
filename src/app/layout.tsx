import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const osSans = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariane Presskit",
  description: "Presskit 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${osSans.variable} ${osSans.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
