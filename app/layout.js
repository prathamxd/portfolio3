import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratham's Portfolio",
  description: "A Portfolio website for frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}} bg-[#0F0F0F]`}>
        <div className="text-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
