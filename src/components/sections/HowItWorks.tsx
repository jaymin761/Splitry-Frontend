import { CreditCard, Receipt, Users } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax, ScrollProgress } from "@/components/motion/ScrollMotion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Create Group",
    description: "Start a group for a trip, household, or event and invite your friends in seconds with a simple invite link or QR code.",
    icon: Users,
    screenshot: { src: "/Create Group.png", width: 1500, height: 3248, alt: "Create Group screen with group name and type options" },
  },
  {
    title: "Split Expenses",
    description: "Splitry automatically categorizes items, calculates tax, and assigns exact shares.",
    icon: Receipt,
    screenshot: { src: "/Group.png", width: 321, height: 636, alt: "Group screen listing shared expenses and who lent or borrowed" },
  },
  {
    title: "Settle Instantly",
    description: "Record settlements in one tap. Splitry minimizes required transactions so everyone gets squared up with zero hassle.",
    icon: CreditCard,
    screenshot: { src: "/Home Screen.png", width: 324, height: 638, alt: "Home screen with total balance and Settle up quick action" },
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Simple 3-Step Process"
          title={
            <>
              Split bills in <span className="text-primary-green">3 easy steps.</span>
            </>
          }
          description="Zero complex setups. Clear ledgers from day one."
        />

        <ScrollProgress className="mt-14 lg:mt-24">
        <ol className="mx-auto grid max-w-3xl grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal as="li" key={step.title} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border-stroke bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:flex-row lg:flex-col">
                  <div className="p-6 sm:p-7 md:flex-1 md:self-center lg:self-auto">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-green/20 bg-primary-green/10 text-primary-green">
                        <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-muted">Step {i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-primary-dark">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
                  </div>
                  <div className="relative mt-auto h-64 overflow-hidden bg-background-soft px-10 pt-8 sm:h-72 md:mt-0 md:w-[42%] md:shrink-0 lg:mt-auto lg:w-auto">
                    <Parallax distance={20}>
                      <PhoneFrame
                        {...step.screenshot}
                        sizes="240px"
                        className="mx-auto w-full max-w-[220px] rounded-b-none pb-0 shadow-card [&>div]:rounded-b-none"
                      />
                    </Parallax>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
        </ScrollProgress>
      </div>
    </section>
  );
};

export default HowItWorks;
