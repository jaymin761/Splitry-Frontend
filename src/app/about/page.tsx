import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from './AboutContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Splitry',
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
    <main className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
