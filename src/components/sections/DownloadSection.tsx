import Image from "next/image";
import { StoreBadges } from "@/components/ui/StoreBadges";

const DownloadSection = () => {
  return (
    <section id="download" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="balance-card mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] px-6 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:px-16 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            Available now on iOS and Android
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Ready to simplify shared expenses?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
            Join 10,000+ users who split expenses the smart way. Download Splitry today and start tracking for free.
          </p>
          <StoreBadges size="lg" className="mt-8 justify-center lg:justify-start" />
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="rounded-[2.5rem] bg-white/10 p-6 ring-1 ring-white/20">
            <Image src="/AppIcon.png" alt="" width={168} height={168} className="rounded-[2.2rem] shadow-lift" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
