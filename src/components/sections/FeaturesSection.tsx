import { BarChart3, Bell, BellRing, BrainCircuit, MessageSquare, PiggyBank, Scale, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    title: "Smart Expense Splitting",
    description: "Intelligent algorithms to split bills by percentage, shares, or exact amounts with tax and tip.",
    icon: Zap,
  },
  {
    title: "Real-time Group Chat",
    description: "Discuss expenses and coordinate settlements with your friends seamlessly without leaving Splitry.",
    icon: MessageSquare,
  },
  {
    title: "Budget Analytics",
    description: "Deep dive into your group spending habits with beautiful interactive visual charts.",
    icon: BarChart3,
  },
  {
    title: "Spending Insights",
    description: "Get predictive insights into future group expenses based on historical spending patterns.",
    icon: BrainCircuit,
  },
  {
    title: "Auto Nudge Reminders",
    description: "Never forget a debt. Smart automated reminders send polite nudges to keep balances square.",
    icon: Bell,
  },
  {
    title: "Debt Simplification",
    description: "Minimize total transaction count between friends using our advanced settlement matrix.",
    icon: Scale,
  },
  {
    title: "Budget Planner",
    description: "Set custom group budgets and track category limits in real time to stay in control.",
    icon: PiggyBank,
  },
  {
    title: "Recurring Bill Alerts",
    description: "Stay ahead of rent, WiFi, and subscription renewals with timely recurring expense alerts.",
    icon: BellRing,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="border-t border-border-stroke bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Platform Capabilities"
          title={
            <>
              Everything you need to <span className="text-primary-green">manage shared finances.</span>
            </>
          }
          description="Powerful tools designed for speed, clarity, and total automation. Stop worrying about who owes what."
        />

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal as="li" key={feature.title} delay={(i % 4) * 0.05}>
                <div className="group flex h-full flex-col rounded-3xl border border-border-stroke bg-background-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-green/30 hover:bg-white hover:shadow-lift sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-green/20 bg-primary-green/10 text-primary-green transition-colors group-hover:bg-primary-green group-hover:text-white">
                    <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-primary-dark">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
