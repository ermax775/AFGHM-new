import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { MinistriesSection } from "@/components/MinistriesSection";
import { Navigation } from "@/components/Navigation";
import { PrayerRequestSection } from "@/components/PrayerRequestSection";
import { ScriptureBanner } from "@/components/ScriptureBanner";
import { SermonsSection } from "@/components/SermonsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MinistriesSection />
      <GallerySection />
      <EventsSection />
      <SermonsSection />
      <TestimonialsSection />
      <ScriptureBanner />
      <PrayerRequestSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
