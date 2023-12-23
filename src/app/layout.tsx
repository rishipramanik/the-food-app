import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Notifications from "@/components/Notifications";
import QueryProvider from "@/components/QueryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
          <QueryProvider>
          <div>
            <Notifications />
            <Navbar />
            {children}
            <Footer />
            <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
          </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
