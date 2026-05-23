import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://splitry.com"),
  title: {
    default: "Splitry | Split Expenses Smarter with AI",
    template: "%s | Splitry",
  },
  description: "Track, split, settle, and manage shared expenses with friends, roommates, and groups effortlessly using AI-powered receipt scanning and automated calculations.",
  keywords: [
    "expense splitting app",
    "bill split",
    "AI expense manager",
    "shared expenses calculator",
    "roommate expense tracker",
    "group bill splitter",
    "split bill with AI",
    "Splitry app",
    "settle debts smartly",
    "personal finance app"
  ],
  authors: [{ name: "Splitry Team", url: "https://splitry.com" }],
  creator: "Splitry Inc.",
  publisher: "Splitry Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Splitry | Split Expenses Smarter with AI",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly with automated AI scanning.",
    type: "website",
    url: "https://splitry.com",
    siteName: "Splitry",
    locale: "en_US",
    images: [
      {
        url: "/home-screen.png",
        width: 1200,
        height: 630,
        alt: "Splitry App Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splitry | Split Expenses Smarter with AI",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly.",
    images: ["/home-screen.png"],
    creator: "@splitry",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Splitry",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Splitry is an AI-powered expense manager that helps friends, couples, and groups track, split, and settle shared bills effortlessly using receipt scanning and smart calculations.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "8450"
    }
  };

  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background-soft text-primary-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
