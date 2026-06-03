'use client';

import { useState, useRef, useEffect } from 'react';
import WaveformBars from './WaveformBars';

interface AudioPlayerProps {
  src?: string;
  label?: string;
}

export default function AudioPlayer({ src, label = 'Sample Reel — 2025' }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) {
      setPlaying(p => !p);
      return;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(p => !p);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setTime(audio.currentTime);
    audio.addEventListener('timeupdate', onTime);
    return () => audio.removeEventListener('timeupdate', onTime);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-deep border border-yellow/20 rounded-2xl p-6 w-full max-w-sm">
      {src && <audio ref={audioRef} src={src} />}

      <div className="mb-4">
        <WaveformBars count={40} animated={playing} color="#F5C800" height={48} />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-xs text-warm-gray tracking-widest">{label}</p>
          <p className="font-mono text-xs text-yellow/60 mt-1">{formatTime(time)}</p>
        </div>
        <button
          onClick={toggle}
          className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center hover:bg-yellow/90 transition-colors"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg className="w-4 h-4" fill="#0D0D0D" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="#0D0D0D" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
