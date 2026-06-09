'use client';

import { useEffect, useRef, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';

const HEADLINE_WORDS = ['The', 'Voice', 'Behind', 'Every', 'Story.'];

export default function Hero() {
  const [revealed, setRevealed] = useState<boolean[]>(HEADLINE_WORDS.map(() => false));

  useEffect(() => {
    HEADLINE_WORDS.forEach((_, i) => {
      setTimeout(() => {
        setRevealed(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 300 + i * 120);
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Decorative AM lettermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-cream select-none pointer-events-none"
        style={{
          fontSize: '40vw',
          opacity: 0.03,
          lineHeight: 1,
          right: '-5vw',
        }}
        aria-hidden
      >
        AM
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text */}
        <div>
          <p className="font-mono text-yellow text-xs tracking-[0.3em] mb-8 uppercase">
            Voice Over · Audiobooks · Character
          </p>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-cream leading-none mb-6">
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.2em] transition-all duration-500"
                style={{
                  opacity: revealed[i] ? 1 : 0,
                  transform: revealed[i] ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="font-editorial italic text-2xl md:text-3xl text-warm-gray leading-snug max-w-md">
            Cinematic narration. Character-rich performance. Studio quality.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="/contact"
              className="font-body font-bold text-sm bg-yellow text-black px-8 py-3.5 rounded-full hover:bg-yellow/90 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="#reel"
              className="font-body font-bold text-sm border border-cream/20 text-cream px-8 py-3.5 rounded-full hover:border-yellow/50 transition-colors"
            >
              Hear the Work
            </a>
          </div>
        </div>

        {/* Audio Player Card */}
        <div className="flex justify-center lg:justify-end">
          <AudioPlayer src="/audio/great-plains-wonders.mp3" label="Sample of the Week" />
        </div>
      </div>
    </section>
  );
}
