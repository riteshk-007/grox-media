import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Faq from "@/components/shared/Faq";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Faq limit={4} />
      <Contact />
    </main>
  );
}
