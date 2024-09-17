import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "../components/ClientProvider";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pick your pick",
  description: "Generated by create next app",
};

export default function RootLayout(props: Props) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
