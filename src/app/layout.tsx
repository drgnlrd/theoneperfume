/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Nunito } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "The One Perfumes - Fragrance of your imagination",
  description:
    "The best Perfumes and Attars that you can never forget.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>x
      <body className={nunito.className}>
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
