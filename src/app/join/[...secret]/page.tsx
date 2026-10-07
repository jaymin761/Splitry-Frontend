import React from "react";
import { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { decryptGroupQRPayload } from "@/lib/qr";
import { InvalidLinkCard, InviteCard } from "@/components/invite/InviteCard";
import { GroupQRPayload } from "@/types/qr";

interface PageProps {
  params: Promise<{ secret: string[] | string }>;
}

/**
 * Extracts full secret string from catch-all route parameters.
 * Recombines path segments split by `/` characters in Base64 payloads.
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
 * Server-side metadata generator for Group Join deep links.
 * Displays group name in title like: Join "dubai" on Splitry
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const secret = await getSecretFromParams(params);
  const payload: GroupQRPayload | null = decryptGroupQRPayload(secret);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://splitry.com";
  const canonicalUrl = `${baseUrl}/join/${encodeURIComponent(secret)}`;
  const appIconUrl = `${baseUrl}/AppIcon.png`;

  // Fallback metadata if decryption fails
  if (!payload || !payload.name) {
    return {
      title: { absolute: "Splitry" },
      robots: NOINDEX,
      description: "Splitry is a free app for sharing expenses with friends and family.",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        siteName: "Splitry",
        title: "Splitry",
        description: "Splitry is a free app for sharing expenses with friends and family.",
        url: canonicalUrl,
        images: [
          {
            url: appIconUrl,
            width: 150,
            height: 150,
            alt: "Splitry",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary",
        title: "Splitry",
        description: "Splitry is a free app for sharing expenses with friends and family.",
        images: [appIconUrl],
      },
    };
  }

  // Dynamic metadata: Join "dubai" on Splitry (matching Splitwise format)
  const title = `Join "${payload.name}"`;
  const description =
    "Split expenses with your group in seconds. Track who owes what, settle balances, and stay organized with Splitry.";
  return {
    title: { absolute: title },
    robots: NOINDEX,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      siteName: "Splitry",
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: appIconUrl,
          width: 150,
          height: 150,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [appIconUrl],
    },
  };
}

/**
 * Server Component: Group invitation deep link page.
 * Path: app/join/[...secret]/page.tsx
 */
export default async function JoinPage({ params }: PageProps) {
  const secret = await getSecretFromParams(params);
  const payload: GroupQRPayload | null = decryptGroupQRPayload(secret);

  if (!payload) {
    return <InvalidLinkCard title="Invalid Group Link" message="This group invite link is invalid, expired, or corrupted." />;
  }

  return (
    <InviteCard
      variant="group"
      name={payload.name}
      avatarUrl={payload.avatarUrl}
      secret={secret}
      badge="Group Invite"
      title={<>Join &ldquo;{payload.name}&rdquo;</>}
      description="You've been invited to join this group on Splitry and split expenses effortlessly."
      footer="stores"
    />
  );
}
