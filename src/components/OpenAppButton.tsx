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
    "https://play.google.com/store/apps/details?id=com.splitry.app",
  iosStoreUrl = process.env.NEXT_PUBLIC_IOS_STORE_URL ||
    "https://apps.apple.com/app/splitry/id123456789",
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
          navigator.userAgent || navigator.vendor || (window as any).opera || "";

        if (/android/i.test(userAgent)) {
          window.location.href = androidStoreUrl;
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
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
      className="w-full py-4 px-6 rounded-2xl bg-[#03A671] text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#03A671]/25 hover:bg-[#028f61] hover:shadow-xl active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed group"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Opening Splitry...</span>
        </>
      ) : (
        <>
          <Smartphone className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span>Open Splitry</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
};

export default OpenAppButton;
