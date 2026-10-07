import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const values = [
  {
    icon: Sparkles,
    title: "Smart Simplicity",
    description: "We leverage cutting-edge technology to eliminate manual math, scanning receipts instantly with pinpoint accuracy.",
  },
  {
    icon: Users,
    title: "Friendship First",
    description: "Money shouldn't ruin friendships. We make settling up fair, transparent, and completely stress-free.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Privacy",
    description: "Your financial data is yours. We use bank-level encryption and never sell your personal information.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "No more spending hours calculating who owes what. Snap a photo and let Splitry do the heavy lifting in seconds.",
  },
];

const storySteps = [
  "It started at a group dinner. The check arrived, and what was supposed to be a fun night turned into a frustrating 20-minute math exercise involving tax, tip, and who had the extra appetizer.",
  "We realized existing apps either required manual entry of every single item, or were too complex for everyday use. We knew there had to be a better, smarter way.",
  "Today, Splitry is a dedicated team on a mission to eliminate financial friction between friends, utilizing advanced receipt scanning and smart algorithms to make splitting expenses feel like magic.",
];

export default function AboutContent() {
  return (
    <>
      <PageHeader
        eyebrow="Our Mission"
        title={
          <>
            Reinventing how friends <span className="text-primary-green">split expenses.</span>
          </>
        }
        description="We built Splitry because we believe that sharing moments with friends shouldn't be overshadowed by the awkwardness of figuring out the bill."
      />

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">The Story Behind Splitry</h2>
          <ol className="mt-12 flex flex-col">
            {storySteps.map((step, idx) => (
              <Reveal as="li" key={idx} delay={idx * 0.08} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-green/20 bg-primary-green/10 font-bold text-primary-green">
                    {idx + 1}
                  </span>
                  {idx < storySteps.length - 1 && <span className="my-2 w-px flex-1 bg-border-stroke" aria-hidden="true" />}
                </div>
                <p className="pb-10 pt-1.5 text-base leading-relaxed text-body sm:text-lg">{step}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border-stroke bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader title="Our Core Values" description="The principles that guide every feature we build and every decision we make." />
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {values.map(({ icon: Icon, title, description }, idx) => (
              <Reveal as="li" key={title} delay={idx * 0.05}>
                <div className="flex h-full gap-5 rounded-3xl border border-border-stroke bg-background-soft p-6 sm:p-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary-green/20 bg-primary-green/10 text-primary-green">
                    <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
                    <p className="mt-2 leading-relaxed text-body">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="balance-card mx-auto max-w-5xl rounded-[2rem] px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to stop doing math?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Join thousands of friends who have already switched to Splitry for stress-free expense splitting.
          </p>
          <Link
            href="/#download"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary-green-deep transition-colors hover:bg-background-soft"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
