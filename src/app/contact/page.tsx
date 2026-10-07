import React from 'react';
import { SiteShell } from "@/components/layout/SiteShell";
import ContactContent from './ContactContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Splitry team for any questions, feedback, or support regarding the application.',
  alternates: {
    canonical: 'https://splitry.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Splitry',
    description: 'Get in touch with the Splitry team for any questions, feedback, or support regarding the application.',
    url: 'https://splitry.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactContent />
    </SiteShell>
  );
}
