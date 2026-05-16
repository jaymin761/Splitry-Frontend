import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Splitry | Split expenses smarter with AI",
  description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly using AI-powered automation.",
  keywords: ["expense splitting", "bill split", "AI expense manager", "shared expenses", "finance app", "Splitry"],
  openGraph: {
    title: "Splitry | Split expenses smarter with AI",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly.",
    type: "website",
    url: "https://splitry.com",
    siteName: "Splitry",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-background-soft text-primary-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
