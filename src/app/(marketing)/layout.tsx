"use client";
import '../../app/style/globals.css';
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <SessionProvider>
        <Navbar/>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 h-screen">
          {children}
        </div>
        <Footer/>
      </SessionProvider>
      </body>
    </html>
  );
}
