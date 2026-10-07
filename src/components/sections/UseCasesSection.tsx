import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const useCases = [
  {
    emoji: "🏖️",
    title: "Weekend Trips",
    subtitle: "Vacations & Road Trips",
    items: ["Airbnb & Hotels", "Group Dinners", "Gas & Tolls", "Instant 1-Tap Settle"],
  },
  {
    emoji: "🏠",
    title: "Roommates",
    subtitle: "Apartments & Living",
    items: ["Monthly Rent", "High-Speed WiFi", "Groceries", "Utilities & Bills"],
  },
  {
    emoji: "❤️",
    title: "Couples",
    subtitle: "Dates & Shared Living",
    items: ["Romantic Dinners", "Shopping Trips", "Holidays", "Shared Subscriptions"],
  },
  {
    emoji: "🎉",
    title: "Events & Parties",
    subtitle: "Celebrations & Outings",
    items: ["Birthday Parties", "Office Outings", "Weddings", "Concerts & Tickets"],
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="border-y border-border-stroke bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Real-Life Use Cases"
          title={
            <>
              Built for the moments <span className="text-primary-green">that matter.</span>
            </>
          }
          description="Not just features — real everyday scenarios where Splitry keeps everyone square effortlessly."
        />

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {useCases.map((useCase, i) => (
            <Reveal as="li" key={useCase.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-border-stroke bg-background-soft p-6 transition-all duration-300 hover:border-primary-green hover:bg-white hover:shadow-lift sm:p-7">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-stroke bg-white text-3xl shadow-card"
                  aria-hidden="true"
                >
                  {useCase.emoji}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-primary-dark">{useCase.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary-green-deep">{useCase.subtitle}</p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-border-stroke pt-5">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-primary-dark/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-green" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UseCasesSection;
