import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { CartProvider } from "./CartContext";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Zechem",
  description: "Zechem gluten free bread",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <CartProvider>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
