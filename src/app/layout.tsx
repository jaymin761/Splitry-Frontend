import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://splitry.com"),
  title: {
    default: "Splitry | Split Expenses the Smart Way",
    template: "%s | Splitry",
  },
  description: "Splitry is the free expense splitting app to split bills with friends, roommates, and groups. Scan receipts, track balances, and settle up in one tap.",
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
  itunes: {
    appId: "6803580203",
    appArgument: "https://splitry.com",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/splitry-split-expenses/id6803580203",
      app_store_id: "6803580203",
    },
    android: {
      package: "com.splitry.app.splitry",
      app_name: "Splitry",
    },
    web: {
      url: "https://splitry.com",
      should_fallback: true,
    },
  },
  openGraph: {
    title: "Splitry | Split Expenses the Smart Way",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly with automated receipt scanning.",
    type: "website",
    url: "https://splitry.com",
    siteName: "Splitry",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Splitry | Split Expenses the Smart Way",
    description: "Track, split, settle, and manage shared expenses with friends and groups effortlessly.",
    creator: "@splitry",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Marks JS availability before first paint so scroll reveals never hide content without JS */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)} />
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
