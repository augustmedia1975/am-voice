'use client';

import { useRef } from 'react';

const TESTIMONIALS = [
  {
    quote: "Adam Roussell doesn't just read words — he inhabits them. Our audiobook climbed the charts within a week of release, and listener reviews kept mentioning the narration. That never happens.",
    name: 'Rachel Okoye',
    company: 'Meridian Publishing',
  },
  {
    quote: "We needed a voice that felt cinematic yet intimate for a global brand campaign. Adam delivered something that stopped us mid-playback. That warmth is impossible to manufacture.",
    name: 'David Huang',
    company: 'Apex Creative Studio',
  },
  {
    quote: "The range is unreal. Same session: a tender children's story and a thundering trailer read. Flawless each time, first take.",
    name: 'Simone Leclair',
    company: 'Northlight Productions',
  },
  {
    quote: "Working with Adam felt less like a recording session and more like a collaboration. He elevated the script beyond what we wrote. The e-learning engagement rates haven't been the same since.",
    name: 'Marcus Webb',
    company: 'Torchlight Learning',
  },
];

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-0 left-8 font-display text-[200px] leading-none text-yellow opacity-[0.08] select-none pointer-events-none">
        &ldquo;
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[340px] md:w-[420px] snap-start bg-deep border border-cream/10 rounded-2xl p-8"
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-yellow text-sm">★</span>
              ))}
            </div>
            <p className="font-editorial italic text-xl text-cream leading-relaxed mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-body font-bold text-cream text-sm">{t.name}</p>
              <p className="font-body text-warm-gray text-sm">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
