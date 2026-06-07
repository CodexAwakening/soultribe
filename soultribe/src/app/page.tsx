import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ConnectionJourney from '@/components/ConnectionJourney';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Safety from '@/components/Safety';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ConnectionJourney />
      <Features />
      <Pricing />
      <Testimonials />
      <Safety />
      <Footer />
    </main>
  );
}