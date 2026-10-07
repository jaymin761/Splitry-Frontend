import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { appJsonLd } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCasesSection from "@/components/sections/UseCasesSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DownloadSection from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={appJsonLd} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <UseCasesSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <DownloadSection />
    </SiteShell>
  );
}
