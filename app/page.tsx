import Hero from '@/components/sections/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import ReelSection from '@/components/sections/ReelSection';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <ReelSection />
      <Testimonials />
      <Process />
      <ContactCTA />
      <Footer />
    </main>
  );
}
