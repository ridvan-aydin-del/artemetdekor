import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Artemet Dekor",
  description: "Artemet Dekor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
