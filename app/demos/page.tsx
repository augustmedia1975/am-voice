'use client';

import { useState } from 'react';
import AudioSampleRow from '@/components/AudioSampleRow';
import WaveformBars from '@/components/WaveformBars';
import Footer from '@/components/Footer';

const DEMO_SECTIONS = [
  {
    genre: 'Commercial',
    tagline: 'Warmth that sells. Authority that reassures.',
    bg: '#0D0D0D',
    accent: '#F5C800',
    samples: [
      { id: '01', title: 'Luxury Auto — 60s', genre: 'Commercial', duration: '1:02', src: '' },
      { id: '02', title: 'Tech Launch — 30s', genre: 'Commercial', duration: '0:32', src: '' },
    ],
  },
  {
    genre: 'Character',
    tagline: 'From villain to hero. Every voice fully inhabited.',
    bg: '#1A1611',
    accent: '#F5C800',
    samples: [
      { id: '03', title: 'Animated Feature — Demo', genre: 'Character', duration: '1:48', src: '' },
      { id: '04', title: 'Video Game — Boss VO', genre: 'Character', duration: '2:12', src: '' },
    ],
  },
  {
    genre: 'Trailer',
    tagline: 'The voice that makes audiences lean forward.',
    bg: '#0D0D0D',
    accent: '#F5C800',
    samples: [
      { id: '05', title: 'Epic Action — Theatrical', genre: 'Trailer', duration: '0:55', src: '' },
      { id: '06', title: 'Prestige Drama — Teaser', genre: 'Trailer', duration: '1:10', src: '' },
    ],
  },
  {
    genre: 'Narration',
    tagline: 'Literature, lived.',
    bg: '#1A1611',
    accent: '#F5C800',
    samples: [
      { id: '07', title: 'Literary Fiction — Chapter 1', genre: 'Narration', duration: '3:22', src: '' },
      { id: '08', title: 'True Crime — Prologue', genre: 'Narration', duration: '2:44', src: '' },
    ],
  },
  {
    genre: 'Corporate',
    tagline: 'Clear. Credible. Impossible to tune out.',
    bg: '#0D0D0D',
    accent: '#F5C800',
    samples: [
      { id: '09', title: 'Annual Report Narration', genre: 'Corporate', duration: '1:35', src: '' },
      { id: '10', title: 'E-Learning Module — Safety', genre: 'Corporate', duration: '2:08', src: '' },
    ],
  },
];

export default function DemosPage() {
  const [activeSampleId, setActiveSampleId] = useState<string | null>(null);

  return (
    <>
      <main className="bg-black min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-mono text-yellow text-xs tracking-[0.3em] mb-6">VOICE DEMOS</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-cream leading-none mb-6">
            The Range.<br />Hear It.
          </h1>
          <p className="font-editorial italic text-2xl text-warm-gray max-w-lg">
            Five genres. One voice. Infinite possibilities.
          </p>
        </section>

        {/* Demo sections */}
        {DEMO_SECTIONS.map(section => (
          <section
            key={section.genre}
            style={{ backgroundColor: section.bg }}
            className="py-24"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
                {/* Left info */}
                <div>
                  <span className="font-mono text-xs text-yellow/60 tracking-widest">{section.genre.toUpperCase()}</span>
                  <h2 className="font-display text-4xl font-bold text-cream mt-2 mb-4">{section.genre}</h2>
                  <p className="font-editorial italic text-warm-gray text-lg mb-8">{section.tagline}</p>
                  <WaveformBars count={30} animated={false} color="#F5C800" height={32} />
                </div>

                {/* Right samples */}
                <div className="flex flex-col gap-3">
                  {section.samples.map(sample => (
                    <AudioSampleRow
                      key={sample.id}
                      sample={sample}
                      activeSampleId={activeSampleId}
                      onPlay={setActiveSampleId}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
