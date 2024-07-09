import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HiredHub",
  description: "HiredHub website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav>
        <Navbar />
      </nav>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
