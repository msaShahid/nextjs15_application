import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './style/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import { ErrorWrapper } from "./error-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ErrorWrapper> */}
        <Navbar/>
        <>
        <div className="h-screen">
          <div className="flex flex-col h-full mx-6 mt-5">
          {children}
          </div>
          
        </div>
        
        </>
        
        {/* </ErrorWrapper> */}
        <Footer/>
      </body>
    </html>

  );
}
