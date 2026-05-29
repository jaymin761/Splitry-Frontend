"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-stroke pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/splitry-logo-s1.png"
                  alt="Splitry Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary-dark">
                Splitry
              </span>
            </Link>
            <p className="text-secondary-gray leading-relaxed">
              AI-powered expense splitting for friends, couples, and groups. Settle debts instantly and stay friends.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-border-stroke flex items-center justify-center text-secondary-gray hover:text-primary-green hover:border-primary-green transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary-dark mb-6 text-lg">Product</h4>
            <ul className="flex flex-col gap-4 text-secondary-gray">
              <li><Link href="#features" className="hover:text-primary-green transition-colors">Features</Link></li>
              <li><Link href="#ai" className="hover:text-primary-green transition-colors">AI Engine</Link></li>
              <li><Link href="#analytics" className="hover:text-primary-green transition-colors">Analytics</Link></li>
              {/* <li><Link href="#" className="hover:text-primary-green transition-colors">Pricing</Link></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-dark mb-6 text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-secondary-gray">
              <li><Link href="#" className="hover:text-primary-green transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-dark mb-6 text-lg">Legal</h4>
            <ul className="flex flex-col gap-4 text-secondary-gray">
              <li><Link href="/privacy-policy" className="hover:text-primary-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-green transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq" className="hover:text-primary-green transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-stroke pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-secondary-gray">
            © {new Date().getFullYear()} Splitry Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-secondary-gray">
            <Link href="/faq" className="hover:text-primary-green">Support & FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
