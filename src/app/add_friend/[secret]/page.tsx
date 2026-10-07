import React from "react";
import { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { decryptQRPayload } from "@/lib/qr";
import { InvalidLinkCard, InviteCard } from "@/components/invite/InviteCard";
import { QRPayload } from "@/types/qr";

interface PageProps {
  params: Promise<{ secret: string }>;
}

/**
 * Server-side metadata generator for Add Friend deep links.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { secret } = await params;
  const payload: QRPayload | null = decryptQRPayload(secret);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://splitry.com";
  const canonicalUrl = `${baseUrl}/add_friend/${encodeURIComponent(secret)}`;
  const shareImageUrl = `${baseUrl}/images/share.png`;

  // Fallback metadata if decryption fails
  if (!payload || !payload.fullName) {
    return {
      title: { absolute: "Splitry" },
      robots: NOINDEX,
      description: "Split expenses with friends.",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: "Splitry",
        description: "Split expenses with friends.",
        url: canonicalUrl,
        siteName: "Splitry",
        images: [
          {
            url: shareImageUrl,
            width: 1200,
            height: 630,
            alt: "Splitry - Split Expenses",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Splitry",
        description: "Split expenses with friends.",
        images: [shareImageUrl],
      },
    };
  }

  const title = `${payload.fullName} invited you to Splitry`;
  const description = `Join ${payload.fullName} on Splitry and split expenses effortlessly.`;

  return {
    title: { absolute: title },
    robots: NOINDEX,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Splitry",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImageUrl],
    },
  };
}

/**
 * Server Component: Renders the Add Friend Deep Link page.
 * Path: app/add_friend/[secret]/page.tsx
 */
export default async function AddFriendPage({ params }: PageProps) {
  const { secret } = await params;

  // Decrypt payload on server
  const payload: QRPayload | null = decryptQRPayload(secret);

  // If decryption fails, render Invalid QR state
  if (!payload) {
    return <InvalidLinkCard title="Invalid QR" message="Invalid or corrupt invitation link" />;
  }

  return (
    <InviteCard
      variant="person"
      name={payload.fullName}
      avatarUrl={payload.avatarUrl}
      secret={secret}
      title={payload.fullName}
      description="invited you to connect on Splitry and split expenses effortlessly."
      footer="secure"
    />
  );
}
