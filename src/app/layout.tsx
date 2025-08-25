import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const osSans = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"], // opcional
});

export const metadata: Metadata = {
  title: "Ariane Presskit",
  description: "Presskit 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${osSans.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
