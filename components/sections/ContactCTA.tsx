import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Decorative AM */}
      <div
        className="absolute inset-0 flex items-center justify-center font-display font-black text-cream select-none pointer-events-none"
        style={{ fontSize: '60vw', opacity: 0.025, transform: 'rotate(-5deg)', lineHeight: 1 }}
        aria-hidden
      >
        AM
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center py-32">
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-cream leading-none mb-8">
          Ready to Give<br />
          <span className="text-yellow">Your Story</span><br />
          a Voice?
        </h2>

        <p className="font-editorial italic text-2xl text-warm-gray mb-12 max-w-lg mx-auto">
          Let&apos;s make something worth remembering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/contact"
            className="font-body font-bold text-base bg-yellow text-black px-10 py-4 rounded-full hover:bg-yellow/90 transition-colors"
          >
            Start a Project
          </Link>
          <a
            href="#"
            className="font-body font-bold text-base border border-cream/20 text-cream px-10 py-4 rounded-full hover:border-yellow/50 transition-colors"
          >
            Download Rate Card
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono text-xs text-warm-gray/60">
          <span>hello@amstudio.io</span>
          <span className="hidden sm:block text-yellow">·</span>
          <span>New Orleans</span>
          <span className="hidden sm:block text-yellow">·</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow rounded-full animate-pulse" />
            Available for projects
          </span>
        </div>
      </div>
    </section>
  );
}
