import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Notifications from "@/components/Notifications";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhiri Pasta",
  description: "Akhiri Pasta, Burger and Pizzas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div>
            <Notifications />
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
