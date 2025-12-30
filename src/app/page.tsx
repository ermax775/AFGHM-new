import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MinistriesSection } from "@/components/MinistriesSection";
import { Navigation } from "@/components/Navigation";
import { ScriptureBanner } from "@/components/ScriptureBanner";
import { SermonsSection } from "@/components/SermonsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MinistriesSection />
      <EventsSection />
      <SermonsSection />
      <ScriptureBanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
