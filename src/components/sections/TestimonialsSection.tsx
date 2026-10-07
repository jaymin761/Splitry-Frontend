import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/150?u=alex",
    quote: "Splitry has completely changed how I travel with friends. No more messy spreadsheets or awkward money talks after vacations.",
    rating: 5,
    tag: "Trip Leader",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=priya",
    quote: "The AI receipt scanner is pure magic. I just snap a photo at dinner and everything is itemized with tax & tip in seconds.",
    rating: 5,
    tag: "Early Adopter",
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=marcus",
    quote: "The UI is incredibly smooth and fast. No money is ever held in the app, which makes instant 1-tap settlements effortless.",
    rating: 5,
    tag: "Power User",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="border-t border-border-stroke bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Loved by 10,000+ Groups"
          title={
            <>
              Loved by <span className="text-primary-green">thousands of groups.</span>
            </>
          }
          description="See how Splitry helps friends stay square across trips, apartments, and events."
        />

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-border-stroke bg-background-soft p-6 sm:p-8">
                <div className="flex items-center gap-0.5 text-primary-green" aria-label={`Rated ${t.rating} out of 5`} role="img">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-primary-dark">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3 border-t border-border-stroke pt-5">
                  <Image src={t.image} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 font-semibold text-primary-dark">
                      {t.name}
                      <CheckCircle2 className="h-4 w-4 text-primary-green" aria-label="Verified Splitry User" />
                    </p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                  <span className="rounded-full border border-border-stroke bg-white px-2.5 py-1 text-xs font-medium text-primary-dark/70">
                    {t.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
