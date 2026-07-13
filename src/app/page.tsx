import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ServicesOverview from "@/components/sections/ServicesOverview";
import VideoShowcase from "@/components/sections/VideoShowcase";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import TechStack from "@/components/sections/TechStack";
import FAQPreview from "@/components/sections/FAQPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LogoMarquee />
      <ServicesOverview />
      <VideoShowcase />
      <PortfolioPreview />
      <Stats />
      <Testimonials />
      <AboutPreview />
      <TechStack />
      <FAQPreview />
      <Contact />
    </main>
  );
}
