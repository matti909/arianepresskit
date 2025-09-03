import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSideBar from "./components/SideBar";
import { GridBackground } from "./components/GridBackground";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
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
    <html lang="es">
      <body className={`${orbitron.className} antialiased`}>
        <Navbar />
        <SocialSideBar />
        <GridBackground />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
