import { ANDROID_STORE_URL, IOS_STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const FONT = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

function AppStoreBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 54" className={className} aria-hidden="true">
      <rect width="160" height="54" rx="12" fill="black" />
      <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="11.25" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
      <path
        d="M34.42 27.17c-.03-3.32 2.72-4.94 2.84-5.01-1.55-2.27-3.97-2.58-4.82-2.61-2.04-.21-3.99 1.21-5.03 1.21-1.04 0-2.64-1.19-4.34-1.15-2.22.03-4.27 1.3-5.41 3.28-2.32 4.02-.59 9.97 1.66 13.23 1.1 1.59 2.41 3.38 4.13 3.31 1.66-.07 2.29-1.07 4.29-1.07 2.01 0 2.59 1.07 4.35 1.04 1.79-.03 2.92-1.62 4.01-3.22 1.27-1.84 1.79-3.63 1.82-3.72-.04-.02-3.47-1.33-3.5-5.29z"
        fill="white"
      />
      <path
        d="M31.15 17.56c.92-1.11 1.53-2.65 1.36-4.19-1.32.05-2.91.88-3.85 1.99-.85.97-1.59 2.52-1.39 4.01 1.47.11 2.97-.74 3.88-1.81z"
        fill="white"
      />
      <text x="48" y="21" fontFamily={FONT} fontSize="10" fill="white" letterSpacing="0.3">Download on the</text>
      <text x="47" y="39" fontFamily={FONT} fontSize="21" fontWeight="600" fill="white" letterSpacing="-0.3">App Store</text>
    </svg>
  );
}

function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 54" className={className} aria-hidden="true">
      <rect width="160" height="54" rx="12" fill="black" />
      <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="11.25" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
      <g transform="translate(16, 12) scale(0.85)">
        <path fill="#00D2FF" d="M1.3,1.4 C1.1,1.7 1,2.1 1,2.6 L1,31.4 C1,31.9 1.1,32.3 1.3,32.6 L1.4,32.7 L16.8,17.3 L16.8,16.8 L1.4,1.4 L1.3,1.4 Z" />
        <path fill="#FFC207" d="M21.9,22.4 L16.8,17.3 L16.8,16.8 L21.9,11.7 L22,11.8 L28.1,15.3 C29.8,16.3 29.8,17.8 28.1,18.8 L22,22.3 L21.9,22.4 Z" />
        <path fill="#FF3A44" d="M16.9,17.1 L1.4,32.6 C1.9,33.1 2.7,33.2 3.6,32.7 L21.9,22.3 L16.9,17.1 Z" />
        <path fill="#00F076" d="M16.9,17 L21.9,11.8 L3.6,1.4 C2.7,0.9 1.9,1 1.4,1.5 L16.9,17 Z" />
      </g>
      <text x="48" y="21" fontFamily={FONT} fontSize="9" fill="white" letterSpacing="0.5">GET IT ON</text>
      <text x="47" y="39" fontFamily={FONT} fontSize="19" fontWeight="600" fill="white" letterSpacing="-0.3">Google Play</text>
    </svg>
  );
}

interface StoreBadgesProps {
  className?: string;
  /** "md" = 160x54 (default), "lg" = 184x62 */
  size?: "md" | "lg";
}

export function StoreBadges({ className, size = "md" }: StoreBadgesProps) {
  const badgeClass = size === "lg" ? "h-[62px] w-[184px]" : "h-[54px] w-[160px]";
  const linkClass =
    "inline-block rounded-[12px] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a href={IOS_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Download Splitry on the App Store">
        <AppStoreBadge className={badgeClass} />
      </a>
      <a href={ANDROID_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Get Splitry on Google Play">
        <GooglePlayBadge className={badgeClass} />
      </a>
    </div>
  );
}
