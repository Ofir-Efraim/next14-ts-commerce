import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import CombinedProvider from "./CombinedProvider";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "צחם",
  description: "צחם - לחם בריאות מצמחים",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={lato.className}>
        <CombinedProvider>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </CombinedProvider>
      </body>
    </html>
  );
}
