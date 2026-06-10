'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { AudioBook } from '@/lib/booksData';

interface BookCardProps {
  book: AudioBook;
}

export default function BookCard({ book }: BookCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group relative">
      {book.audio && (
        <audio
          ref={audioRef}
          src={book.audio}
          onEnded={() => setPlaying(false)}
        />
      )}

      {/* Cover */}
      <div
        className="relative aspect-[2/3] rounded-xl overflow-hidden mb-4 transition-transform duration-500 group-hover:[transform:perspective(800px)_rotateY(-8deg)]"
        style={{ backgroundColor: book.color }}
      >
        {/* Cover image */}
        {book.image && (
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        )}
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse at top, rgba(255,255,255,0.08) 0%, transparent 70%)`,
          }}
        />
        {/* Title overlay — only shown when no cover image */}
        {!book.image && (
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="font-display text-cream text-base font-bold leading-tight">{book.title}</p>
            <p className="font-body text-warm-gray text-xs mt-1">{book.author}</p>
          </div>
        )}
        {/* Currently recording badge */}
        {book.current && (
          <div className="absolute top-3 right-3 bg-yellow text-black font-mono text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            RECORDING
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={book.audio ? togglePlay : undefined}
            className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center hover:scale-110 transition-transform"
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

      {/* Info */}
      <div>
        <p className="font-body font-bold text-cream text-sm truncate">{book.title}</p>
        <p className="font-body text-warm-gray text-xs">{book.author}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-mono text-[10px] bg-yellow/10 text-yellow px-2 py-0.5 rounded-full">{book.genre}</span>
          <span className="font-mono text-[10px] text-warm-gray/60">{book.runtime}</span>
        </div>
      </div>
    </div>
  );
}
