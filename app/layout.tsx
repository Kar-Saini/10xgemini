import type { Metadata } from "next";
import { Anta, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10xgemini",
  description: "10xgemini",
};
const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${anta.className} antialiased  w-full bg-gradient-to-b from-slate-900 via-neutral-900 to-neutral-950`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
