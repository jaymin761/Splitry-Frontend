import React from 'react';
import { SiteShell } from "@/components/layout/SiteShell";
import ContactContent from './ContactContent';
import type { Metadata } from 'next';
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us – Support & Feedback",
  description:
    "Questions, feedback, or need help with Splitry? Email our support team, browse the FAQ, follow us on social media, or request account deletion.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact Us", path: "/contact" }])} />
      <ContactContent />
    </SiteShell>
  );
}
