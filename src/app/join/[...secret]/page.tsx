import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { decryptGroupQRPayload } from "@/lib/qr";
import OpenAppButton from "@/components/OpenAppButton";
import { GroupQRPayload } from "@/types/qr";
import { ShieldCheck, AlertCircle, ArrowLeft, Users2 } from "lucide-react";

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
      title: "Splitry",
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
  const description = `Splitry is a free app for sharing expenses with friends and family. Our mission is to reduce the stress that money places on relationships.`;

  return {
    title,
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
    return <InvalidLinkCard message="This group invite link is invalid, expired, or corrupted." />;
  }

  // Compute initials from group name
  const initials = payload.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 sm:p-6 text-[#28282C]">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#03A671]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#03A671]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#03A671]/5 rounded-full blur-[80px]" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 text-center flex flex-col items-center transition-all">
        
        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-[#03A671]/20 relative flex-shrink-0">
            <Image
              src="/AppIcon.png"
              alt="Splitry Logo"
              width={36}
              height={36}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#28282C]">
            Splitry
          </span>
        </div>

        {/* Group Avatar */}
        <div className="relative mb-5">
          {payload.avatarUrl ? (
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-[#03A671]/20 shadow-lg relative">
              <Image
                src={payload.avatarUrl}
                alt={payload.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#28282C] to-[#03A671] border-4 border-[#03A671]/20 shadow-lg flex items-center justify-center text-white text-2xl font-bold tracking-wider">
              {initials || <Users2 className="w-10 h-10" />}
            </div>
          )}
          <div className="absolute -bottom-2 -right-2 bg-[#03A671] text-white p-1.5 rounded-xl shadow-md border-2 border-white">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        {/* Group label badge */}
        <div className="mb-2 bg-[#03A671]/10 text-[#03A671] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
          <Users2 className="w-3.5 h-3.5" />
          <span>Group Invite</span>
        </div>

        {/* Group Name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#28282C] mb-2 tracking-tight">
          Join &ldquo;{payload.name}&rdquo;
        </h1>
        <p className="text-[#98979F] text-sm sm:text-base font-medium mb-8 max-w-xs leading-relaxed">
          You&apos;ve been invited to join this group on Splitry and split expenses effortlessly.
        </p>

        {/* Open App CTA Button */}
        <div className="w-full mb-5">
          <OpenAppButton encryptedPayload={secret} />
        </div>

        {/* Store Links */}
        <div className="w-full pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#98979F]">
          <span>Don&apos;t have Splitry?</span>
          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.splitry.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#03A671] hover:underline"
            >
              Play Store
            </a>
            <span>•</span>
            <a
              href="https://apps.apple.com/app/splitry/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#03A671] hover:underline"
            >
              App Store
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function InvalidLinkCard({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 sm:p-6 text-[#28282C]">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-100 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm relative flex-shrink-0">
            <Image
              src="/AppIcon.png"
              alt="Splitry Logo"
              width={32}
              height={32}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#28282C]">
            Splitry
          </span>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4 border border-red-100 shadow-inner">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-[#28282C] mb-2">
          Invalid Group Link
        </h1>
        <p className="text-[#98979F] text-sm mb-6 max-w-xs">{message}</p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#03A671] hover:text-[#028f61] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Splitry Home</span>
        </Link>
      </div>
    </main>
  );
}
