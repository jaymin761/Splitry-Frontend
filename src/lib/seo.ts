import type { Metadata } from "next";
import { ANDROID_STORE_URL, IOS_STORE_URL, SOCIAL_LINKS } from "@/lib/site";

export const SITE_URL = "https://splitry.com";
export const SITE_NAME = "Splitry";

/** Absolute URL for a site path ("/" → "https://splitry.com"). */
export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

interface PageMetadataInput {
  /** Page title without the "| Splitry" suffix (the root layout template adds it). */
  title: string;
  description: string;
  path: string;
  /** Optional share title; defaults to "<title> | Splitry". */
  socialTitle?: string;
}

/**
 * Builds complete per-page metadata. Page-level `openGraph`/`twitter` objects replace the
 * layout's (Next merges metadata shallowly), so every page gets the full set here. Share
 * images come from the file-based `opengraph-image`/`twitter-image` routes.
 */
export function pageMetadata({ title, description, path, socialTitle }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const shareTitle = socialTitle ?? `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      creator: "@splitry",
    },
  };
}

/** Serializes JSON-LD safely (escapes "<" as recommended in the Next.js JSON-LD guide). */
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/AppIcon.png`,
  email: "splitry@gmail.com",
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, IOS_STORE_URL, ANDROID_STORE_URL],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SITE_NAME,
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  url: SITE_URL,
  image: `${SITE_URL}/AppIcon.png`,
  downloadUrl: IOS_STORE_URL,
  installUrl: IOS_STORE_URL,
  sameAs: [IOS_STORE_URL, ANDROID_STORE_URL],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Splitry is a smart expense manager that helps friends, couples, and groups track, split, and settle shared bills effortlessly using smart calculations.",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Metadata for private deep-link pages: never indexed. */
export const NOINDEX: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
};
