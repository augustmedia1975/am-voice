'use client';

import { useState } from 'react';
import AudioSampleRow from '@/components/AudioSampleRow';
import { AUDIO_SAMPLES } from '@/lib/audioData';

export default function ReelSection() {
  const [activeSampleId, setActiveSampleId] = useState<string | null>(null);

  return (
    <section id="reel" className="bg-cream clip-diagonal py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-black/40 text-xs tracking-[0.3em] mb-4">03 · LISTEN</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black leading-tight">
            Let the Work Speak.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {AUDIO_SAMPLES.map(sample => (
            <AudioSampleRow
              key={sample.id}
              sample={sample}
              activeSampleId={activeSampleId}
              onPlay={setActiveSampleId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
