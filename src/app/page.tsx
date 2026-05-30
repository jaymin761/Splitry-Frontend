import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import AppShowcase from "@/components/sections/AppShowcase";
import AISection from "@/components/sections/AISection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DownloadSection from "@/components/sections/DownloadSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      {/* <AppShowcase /> */}
      <AISection />
      <AnalyticsSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
