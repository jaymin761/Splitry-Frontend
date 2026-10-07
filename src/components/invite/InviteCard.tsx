import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Lock, ShieldCheck, Users, Users2 } from "lucide-react";
import OpenAppButton from "@/components/OpenAppButton";
import { Logo } from "@/components/ui/Logo";
import { ANDROID_STORE_URL, IOS_STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** Centered single-card layout shared by every deep-link landing page. */
function InviteShell({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "error" }) {
  return (
    <main className="relative isolate flex min-h-dvh flex-col items-center justify-center px-4 py-10 text-primary-dark sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(3,166,113,0.12),transparent_70%)]"
      />
      <Link href="/" className="mb-6 rounded-lg" aria-label="Splitry home">
        <Logo />
      </Link>
      <div
        className={cn(
          "flex w-full max-w-md flex-col items-center rounded-[2rem] border bg-white p-6 text-center shadow-lift sm:p-8",
          tone === "error" ? "border-alert-red/20" : "border-border-stroke"
        )}
      >
        {children}
      </div>
    </main>
  );
}

interface InviteCardProps {
  variant: "person" | "group";
  name: string;
  avatarUrl?: string;
  /** Encrypted payload forwarded to the native app. */
  secret: string;
  title: ReactNode;
  description: ReactNode;
  badge?: string;
  footer: "stores" | "secure";
}

export function InviteCard({ variant, name, avatarUrl, secret, title, description, badge, footer }: InviteCardProps) {
  const initials = getInitials(name);
  const shape = variant === "group" ? "rounded-3xl" : "rounded-full";
  const FallbackIcon = variant === "group" ? Users2 : Users;

  return (
    <InviteShell>
      {/* Avatar */}
      <div className="relative mb-6">
        {avatarUrl ? (
          <div className={cn("relative h-24 w-24 overflow-hidden border-4 border-primary-green/15 shadow-card", shape)}>
            <Image src={avatarUrl} alt={name} fill sizes="96px" className="object-cover" unoptimized />
          </div>
        ) : (
          <div
            className={cn(
              "balance-card flex h-24 w-24 items-center justify-center border-4 border-primary-green/15 text-2xl font-bold tracking-wider",
              shape
            )}
          >
            {initials || <FallbackIcon className="h-10 w-10" aria-hidden="true" />}
          </div>
        )}
        <span
          className={cn(
            "absolute flex items-center justify-center border-2 border-white bg-primary-green p-1.5 text-white shadow-card",
            variant === "group" ? "-bottom-2 -right-2 rounded-xl" : "bottom-0 right-0 rounded-full"
          )}
        >
          <ShieldCheck className="h-4 w-4" aria-label="Verified invite" />
        </span>
      </div>

      {badge && (
        <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary-green/20 bg-primary-green/10 px-3 py-1 text-xs font-semibold text-primary-green-deep">
          <Users2 className="h-3.5 w-3.5" aria-hidden="true" />
          {badge}
        </p>
      )}

      <h1 className="text-2xl font-bold tracking-tight text-primary-dark text-balance sm:text-3xl">{title}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-body sm:text-base">{description}</p>

      <div className="mt-8 w-full">
        <OpenAppButton encryptedPayload={secret} />
      </div>

      {footer === "stores" ? (
        <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-2 border-t border-border-stroke pt-5 text-sm text-muted">
          <span>Don&apos;t have Splitry?</span>
          <span className="flex items-center gap-3">
            <a href={ANDROID_STORE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-green hover:underline">
              Play Store
            </a>
            <span aria-hidden="true">•</span>
            <a href={IOS_STORE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-green hover:underline">
              App Store
            </a>
          </span>
        </div>
      ) : (
        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Protected by Splitry Secure Encryption
        </p>
      )}
    </InviteShell>
  );
}

export function InvalidLinkCard({ title, message }: { title: string; message: string }) {
  return (
    <InviteShell tone="error">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-alert-red/20 bg-alert-red/10 text-alert-red">
        <AlertCircle className="h-8 w-8" aria-hidden="true" />
      </div>
      <h1 className="text-xl font-bold text-primary-dark sm:text-2xl">{title}</h1>
      <p className="mt-2 max-w-xs text-sm text-body">{message}</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-stroke px-4 py-2.5 text-sm font-semibold text-primary-green transition-colors hover:border-primary-green/40"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Return to Splitry Home
      </Link>
    </InviteShell>
  );
}
