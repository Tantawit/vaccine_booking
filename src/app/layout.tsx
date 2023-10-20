import "./globals.css";

import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";

import NextAuthProvider from "@/providers/NextAuthProvider";

import Navbar from "../components/navbar";
import { authOptions } from "./api/auth/[...nextauth]/route";

import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaccine Booking",
  description: "Vaccine Booking Web Site",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={nextAuthSession}>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
