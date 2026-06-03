import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Testimonials() {
  return (
    <section className="bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-yellow text-xs tracking-[0.3em] mb-4">04 · PRAISE</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream leading-tight">
            The Verdict Is In.
          </h2>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
