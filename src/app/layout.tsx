import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://splitry.com"),
  title: {
    default: "Splitry | Split Expenses the Smart Way",
    template: "%s | Splitry",
  },
  description: "Track, split, settle, and manage shared expenses with friends, roommates, and groups.",
  keywords: [
    "expense splitting app",
    "bill split",
    "smart expense manager",
    "shared expenses calculator",
    "roommate expense tracker",
    "group bill splitter",
    "split bill app",
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
    canonical: "https://splitry.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/AppIcon.png", type: "image/png" }
    ],
    apple: [
      { url: "/AppIcon.png", type: "image/png" }
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
    title: "Splitry | Split Expenses the Smart Way",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly with automated receipt scanning.",
    type: "website",
    url: "https://splitry.com",
    siteName: "Splitry",
    locale: "en_US",
    images: [
      {
        url: "/AppIcon.png",
        width: 1200,
        height: 630,
        alt: "Splitry App Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splitry | Split Expenses the Smart Way",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly.",
    images: ["/AppIcon.png"],
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
    "description": "Splitry is a smart expense manager that helps friends, couples, and groups track, split, and settle shared bills effortlessly using smart calculations.",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DVG4Y2BNCZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DVG4Y2BNCZ');
          `}
        </Script>
      </body>
    </html>
  );
}
