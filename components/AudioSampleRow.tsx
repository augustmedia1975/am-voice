'use client';

import { useState, useRef, useEffect } from 'react';
import WaveformBars from './WaveformBars';
import { AudioSample } from '@/lib/audioData';

interface AudioSampleRowProps {
  sample: AudioSample;
  onPlay: (id: string) => void;
  activeSampleId: string | null;
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function AudioSampleRow({ sample, onPlay, activeSampleId }: AudioSampleRowProps) {
  const isActive = activeSampleId === sample.id;
  const [playing, setPlaying] = useState(false);
  const [remaining, setRemaining] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!isActive && playing) {
      audioRef.current?.pause();
      setPlaying(false);
      setRemaining(null);
    }
  }, [isActive, playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (audio.duration) {
        setRemaining(formatTime(audio.duration - audio.currentTime));
      }
    };

    const onEnded = () => {
      setPlaying(false);
      setRemaining(null);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const toggle = () => {
    if (!isActive) {
      onPlay(sample.id);
      setPlaying(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 50);
      return;
    }
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
    } else {
      audioRef.current?.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className={`flex items-center gap-4 md:gap-8 bg-deep rounded-2xl px-5 py-4 transition-all duration-300 ${
        isActive ? 'border-l-4 border-yellow' : 'border-l-4 border-transparent'
      }`}
    >
      {sample.src && <audio ref={audioRef} src={sample.src} />}

      {/* Track number + info */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <span className="font-mono text-xs text-warm-gray/60 w-6 flex-shrink-0">{sample.id}</span>
        <div className="min-w-0">
          <p className="font-body font-bold text-cream text-sm md:text-base truncate">{sample.title}</p>
          <span className="font-mono text-xs bg-yellow text-black px-2 py-0.5 rounded-full">{sample.genre}</span>
        </div>
      </div>

      {/* Waveform — desktop */}
      <div className="hidden md:block flex-1">
        <WaveformBars count={60} animated={isActive && playing} color="#F5C800" height={36} />
      </div>

      {/* Duration + play */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <span className="font-mono text-xs text-warm-gray hidden sm:block">
          {isActive && playing && remaining ? `-${remaining}` : sample.duration}
        </span>
        <button
          onClick={toggle}
          className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center hover:scale-110 transition-transform"
          aria-label={playing && isActive ? 'Pause' : 'Play'}
        >
          {playing && isActive ? (
            <svg className="w-3 h-3" fill="#0D0D0D" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-3 h-3 ml-0.5" fill="#0D0D0D" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
