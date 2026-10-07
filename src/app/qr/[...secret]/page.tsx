import React from "react";
import { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { decryptQRPayload } from "@/lib/qr";
import { InvalidLinkCard, InviteCard } from "@/components/invite/InviteCard";
import { QRPayload } from "@/types/qr";

interface PageProps {
  params: Promise<{ secret: string[] | string }>;
}

async function getSecretFromParams(params: Promise<{ secret: string[] | string }>): Promise<string> {
  const resolved = await params;
  if (!resolved || !resolved.secret) return "";
  if (Array.isArray(resolved.secret)) {
    return resolved.secret.join("/");
  }
  return resolved.secret || "";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const secret = await getSecretFromParams(params);
  const payload: QRPayload | null = decryptQRPayload(secret);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://splitry.com";
  const canonicalUrl = `${baseUrl}/qr/${encodeURIComponent(secret)}`;
  const logoUrl = `${baseUrl}/logo.png`;

  const appDescription = payload?.fullName
    ? `Join ${payload.fullName} on Splitry and split expenses effortlessly.`
    : "Splitry is a free app for sharing expenses with friends and family.";

  const title = payload?.fullName
    ? `${payload.fullName} invited you to Splitry`
    : "Splitry";

  return {
    title: { absolute: title },
    robots: NOINDEX,
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
          width: 300,
          height: 300,
          alt: "Splitry Logo",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary", // Compact square thumbnail on the right side
      title,
      description: appDescription,
      images: [logoUrl],
    },
  };
}

export default async function QRPage({ params }: PageProps) {
  const secret = await getSecretFromParams(params);
  const payload: QRPayload | null = decryptQRPayload(secret);

  if (!payload) {
    return <InvalidLinkCard title="Invalid QR" message="Invalid or corrupt QR code" />;
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
