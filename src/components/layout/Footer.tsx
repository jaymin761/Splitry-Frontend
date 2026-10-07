import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SOCIAL_LINKS } from "@/lib/site";

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const columns = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "How it works", href: "/#how-it-works" },
      { name: "Use cases", href: "/#use-cases" },
      { name: "Analytics", href: "/#analytics" },
      { name: "Download app", href: "/#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact support", href: "mailto:splitryapp@gmail.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy policy", href: "/privacy-policy" },
      { name: "Terms of service", href: "/terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border-stroke bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:pt-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-5 lg:col-span-4">
            <Link href="/" className="w-fit rounded-lg" aria-label="Splitry home">
              <Logo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-body">
              Smart expense splitting for friends, couples, and groups. Settle debts instantly and stay friends with zero awkwardness.
            </p>
            <div className="flex items-center gap-2">
              {[
                { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Splitry on Facebook" },
                { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Splitry on Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-stroke text-primary-dark/70 transition-colors hover:border-primary-green hover:text-primary-green"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2 lg:col-start-auto">
              <h2 className="mb-4 text-sm font-semibold text-primary-dark">{col.title}</h2>
              <ul className="flex flex-col gap-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-body transition-colors hover:text-primary-green">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-stroke pt-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Splitry Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary-green">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary-green">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
