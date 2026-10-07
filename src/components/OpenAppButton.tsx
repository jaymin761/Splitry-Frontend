"use client";

import React, { useState } from "react";
import { ArrowRight, Smartphone, Loader2 } from "lucide-react";

interface OpenAppButtonProps {
  encryptedPayload: string;
  androidStoreUrl?: string;
  iosStoreUrl?: string;
}

export const OpenAppButton: React.FC<OpenAppButtonProps> = ({
  encryptedPayload,
  androidStoreUrl = process.env.NEXT_PUBLIC_ANDROID_STORE_URL ||
    "https://play.google.com/store/apps/details?id=com.splitry.app.splitry",
  iosStoreUrl = process.env.NEXT_PUBLIC_IOS_STORE_URL ||
    "https://apps.apple.com/us/app/splitry-split-expenses/id6803580203",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenApp = () => {
    setIsLoading(true);

    const deepLink = `splitry://qr/${encodeURIComponent(encryptedPayload)}`;
    const startTime = Date.now();

    // Track whether the app opened (which puts the browser in background)
    let appOpened = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        appOpened = true;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Attempt to launch the native application via custom URL scheme
    window.location.href = deepLink;

    // Fallback: If app is not installed, redirect to app store after delay
    setTimeout(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      setIsLoading(false);

      const elapsedTime = Date.now() - startTime;

      // If page did not switch to background and app did not launch within timeout
      if (!appOpened && elapsedTime < 3500) {
        const userAgent =
          navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || "";

        if (/android/i.test(userAgent)) {
          window.location.href = androidStoreUrl;
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as Window & { MSStream?: unknown }).MSStream) {
          window.location.href = iosStoreUrl;
        } else {
          // Default redirect for Desktop / unspecified platforms
          window.location.href = androidStoreUrl;
        }
      }
    }, 2500);
  };

  return (
    <button
      onClick={handleOpenApp}
      disabled={isLoading}
      type="button"
      aria-busy={isLoading}
      className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-primary-green px-6 py-4 text-base font-semibold text-white shadow-green transition-all duration-200 hover:bg-primary-green-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-80 sm:text-lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
          <span>Opening Splitry...</span>
        </>
      ) : (
        <>
          <Smartphone className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
          <span>Open Splitry</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </>
      )}
    </button>
  );
};

export default OpenAppButton;
