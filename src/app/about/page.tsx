import React from 'react';
import { SiteShell } from "@/components/layout/SiteShell";
import AboutContent from './AboutContent';
import type { Metadata } from 'next';
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "About Us – Our Mission to Simplify Bill Splitting",
  description:
    "We built Splitry so sharing moments with friends is never spoiled by the bill. Learn the story, mission, and values behind the expense splitting app.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: "/about" }])} />
      <AboutContent />
    </SiteShell>
  );
}
