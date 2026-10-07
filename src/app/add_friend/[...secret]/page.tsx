import React from "react";
import { Metadata } from "next";
import { decryptQRPayload } from "@/lib/qr";
import { InvalidLinkCard, InviteCard } from "@/components/invite/InviteCard";
import { QRPayload } from "@/types/qr";

interface PageProps {
  params: Promise<{ secret: string[] | string }>;
}

/**
 * Extracts full secret string regardless of whether it arrives as an array (un-encoded slashes)
 * or a single string (URL-encoded).
 */
async function getSecretFromParams(params: Promise<{ secret: string[] | string }>): Promise<string> {
  const resolved = await params;

  if (!resolved || !resolved.secret) return "";
  if (Array.isArray(resolved.secret)) {
    return resolved.secret.join("/");
  }
  return resolved.secret || "";
}

/**
 * Server-side metadata generator for Add Friend deep links.
 * Configured with compact `summary` card format to display a clean, small side thumbnail.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const secret = await getSecretFromParams(params);
  const payload: QRPayload | null = decryptQRPayload(secret);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://splitry.com";
  const canonicalUrl = `${baseUrl}/add_friend/${encodeURIComponent(secret)}`;
  const logoUrl = `${baseUrl}/AppIcon.png`;

  const appDescription = payload?.fullName
    ? `Join ${payload.fullName} on Splitry and split expenses effortlessly.`
    : "Splitry is a free app for sharing expenses with friends and family.";

  const title = payload?.fullName
    ? `${payload.fullName} invited you to Splitry`
    : "Splitry";

  return {
    title,
    description: appDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      siteName: "Splitry",
      title,
      description: appDescription,
      url: canonicalUrl,
      images: [
        {
          url: logoUrl,
          width: 150,
          height: 150,
          alt: "Splitry Logo",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary", // Forces small square thumbnail on the right side instead of giant header
      title,
      description: appDescription,
      images: [logoUrl],
    },
  };
}

/**
 * Server Component: Renders the Add Friend Deep Link page.
 * Path: app/add_friend/[...secret]/page.tsx
 */
export default async function AddFriendPage({ params }: PageProps) {
  const secret = await getSecretFromParams(params);

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
