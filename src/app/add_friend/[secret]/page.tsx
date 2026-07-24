import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { decryptQRPayload } from "@/lib/qr";
import OpenAppButton from "@/components/OpenAppButton";
import { QRPayload } from "@/types/qr";
import { ShieldCheck, AlertCircle, ArrowLeft, Users } from "lucide-react";

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
      title: "Splitry",
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
    title,
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
    return <InvalidQRCard message="Invalid or corrupt invitation link" />;
  }

  // Compute initials for profile picture fallback
  const initials = payload.fullName
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
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 text-center flex flex-col items-center transition-all">
        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#03A671] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#03A671]/30">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-[#28282C]">
            Splitry
          </span>
        </div>

        {/* Profile Avatar */}
        <div className="relative mb-6">
          {payload.avatarUrl ? (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#03A671]/20 shadow-lg relative">
              <Image
                src={payload.avatarUrl}
                alt={payload.fullName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#28282C] to-[#03A671] border-4 border-[#03A671]/20 shadow-lg flex items-center justify-center text-white text-2xl font-bold tracking-wider">
              {initials || <Users className="w-10 h-10" />}
            </div>
          )}

          <div className="absolute bottom-0 right-0 bg-[#03A671] text-white p-1.5 rounded-full shadow-md border-2 border-white">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        {/* User Info */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#28282C] mb-2 tracking-tight">
          {payload.fullName}
        </h1>
        <p className="text-[#98979F] text-sm sm:text-base font-medium mb-8 max-w-xs leading-relaxed">
          invited you to connect on Splitry and split expenses effortlessly.
        </p>

        {/* Open App CTA Button */}
        <div className="w-full mb-6">
          <OpenAppButton encryptedPayload={secret} />
        </div>

        {/* Informational Note */}
        <div className="text-xs text-[#98979F] flex items-center gap-1.5 justify-center">
          <span>Protected by Splitry Secure Encryption</span>
        </div>
      </div>
    </main>
  );
}

function InvalidQRCard({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 sm:p-6 text-[#28282C]">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-100 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-xl bg-[#03A671] flex items-center justify-center text-white font-bold text-base shadow-sm">
            S
          </div>
          <span className="text-lg font-bold tracking-tight text-[#28282C]">
            Splitry
          </span>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4 border border-red-100 shadow-inner">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-[#28282C] mb-2">
          Invalid Link
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
