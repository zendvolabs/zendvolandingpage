import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cherry_Bomb_One, Work_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const brFirma = localFont({
  src: [
    {
      path: "../../public/fonts/br-firma/BR Firma Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/br-firma/BR Firma SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/br-firma/BR Firma Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-br-firma",
});

const cherryBombOne = Cherry_Bomb_One({
  variable: "--font-cherry-bomb-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Zendvo",
  description: "Cash gifts that feel like opening a present",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${brFirma.variable} ${cherryBombOne.variable} font-sans antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
