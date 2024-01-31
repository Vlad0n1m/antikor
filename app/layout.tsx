import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "ANTIKOR - Мы против!",
  description: "Generated by create next app",
};
import Navbar from "@/components/Navbar";

import localFont from 'next/font/local'
const haus = localFont({
  src: [
    {
      path: './haus-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './haus-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './haus-bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './haus-black.woff',
      weight: '800',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={haus.className}>
        <Navbar />
        <div className="px-5 max-w-[1400px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
