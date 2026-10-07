import { SectionHeader } from "@/components/ui/SectionHeader";
import { HowItWorksFlow } from "@/components/sections/how-it-works/HowItWorksFlow";

/** Mirrors the "How it works" card from the Splitry app (Add → Split → Track → Settle). */
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Simple 4-Step Process"
          title={
            <>
              Split bills in <span className="text-primary-green">4 easy steps.</span>
            </>
          }
          description="Zero complex setups. Clear ledgers from day one."
        />
        <HowItWorksFlow className="mt-12 lg:mt-16" />
      </div>
    </section>
  );
};

export default HowItWorks;
