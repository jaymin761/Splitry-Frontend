import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, MessageSquare, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/SiteShell";
import { SOCIAL_LINKS } from "@/lib/site";

const iconTile =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary-green/20 bg-primary-green/10 text-primary-green";

export default function ContactContent() {
  return (
    <>
      <PageHeader
        eyebrow="We're online and ready to help"
        title={
          <>
            Let&apos;s get in <span className="text-primary-green">Touch</span>
          </>
        }
        description="Whether you have a question about our features, need support, or just want to share feedback, we'd love to hear from you."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:gap-5">
          {/* Primary: email */}
          <a
            href="mailto:splitry@gmail.com"
            className="group balance-card flex flex-col gap-6 rounded-[2rem] p-7 transition-shadow hover:shadow-green sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/15">
                <Mail className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Email Us</h2>
                <p className="mt-2 max-w-md text-white/85">
                  Drop us an email and we&apos;ll get back to you within 24 hours. We&apos;re always happy to chat!
                </p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-primary-green-deeper">
              splitry@gmail.com
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </a>

          {/* FAQ */}
          <Link
            href="/faq"
            className="group flex flex-col rounded-3xl border border-border-stroke bg-white p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary-green/40 hover:shadow-lift"
          >
            <span className={iconTile}>
              <HelpCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-xl font-semibold text-primary-dark">Help Center</h2>
            <p className="mt-2 text-sm leading-relaxed text-body">Find quick answers in our detailed FAQ section.</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-green">
              Visit FAQ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>

          {/* Community */}
          <div className="flex flex-col rounded-3xl border border-border-stroke bg-white p-7 shadow-card">
            <span className={iconTile}>
              <MessageSquare className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-xl font-semibold text-primary-dark">Community</h2>
            <p className="mt-2 text-sm leading-relaxed text-body">Follow us on social media for updates and news.</p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Splitry on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-stroke text-primary-dark transition-colors hover:border-primary-green hover:bg-primary-green hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Splitry on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-stroke text-primary-dark transition-colors hover:border-primary-green hover:bg-primary-green hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Account deletion */}
          <div className="flex flex-col gap-5 rounded-3xl border border-alert-red/20 bg-white p-7 shadow-card sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-alert-red/10 text-alert-red">
                <ShieldAlert className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-primary-dark">Account Deletion</h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-body">
                  Need to permanently delete your account and data? Send us an email and we will process it within 60 days.
                </p>
              </div>
            </div>
            <a
              href="mailto:splitry@gmail.com?subject=Account%20Deletion%20Request"
              className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-alert-red/30 px-4 py-2.5 text-sm font-semibold text-alert-red transition-colors hover:bg-alert-red/5"
            >
              Request Deletion <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
