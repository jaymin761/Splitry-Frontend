import React from 'react';
import { SiteShell } from "@/components/layout/SiteShell";
import AboutContent from './AboutContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the Splitry team, our mission, and why we built the ultimate smart expense splitting app for friends.',
  alternates: {
    canonical: 'https://splitry.com/about',
  },
  openGraph: {
    title: 'About Us | Splitry',
    description: 'Learn about the Splitry team, our mission, and why we built the ultimate smart expense splitting app for friends.',
    url: 'https://splitry.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutContent />
    </SiteShell>
  );
}
