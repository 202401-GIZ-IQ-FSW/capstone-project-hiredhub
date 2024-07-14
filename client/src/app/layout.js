import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Suspense } from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HiredHub",
  description: "HiredHub website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
        </Suspense>
      </body>
    </html>
  );
}
