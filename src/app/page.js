import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import FeatureSection from "@/components/FeatureSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ScreenshotSection from "@/components/ScreenshotSection";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>

      <section id="features">
        <FeatureSection />
      </section>

      <section id="screenshot">
        <ScreenshotSection />
      </section>

      <DownloadSection />

      <section id="contact">
        <ContactSection />
      </section>

      <FooterSection />
    </div>
  );
}
