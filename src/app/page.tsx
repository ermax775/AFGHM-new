import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MinistriesSection } from "@/components/MinistriesSection";
import { EventsSection } from "@/components/EventsSection";
import { SermonsSection } from "@/components/SermonsSection";
import { ScriptureBanner } from "@/components/ScriptureBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

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
