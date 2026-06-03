'use client';

import { useState } from 'react';
import BookCard from '@/components/BookCard';
import Footer from '@/components/Footer';
import { AUDIOBOOKS } from '@/lib/booksData';

const GENRES = ['All', 'Fiction', 'Non-Fiction', 'Thriller', 'Sci-Fi', 'Business', 'Self-Help'];

export default function AudiobooksPage() {
  const [activeGenre, setActiveGenre] = useState('All');

  const filtered = activeGenre === 'All'
    ? AUDIOBOOKS
    : AUDIOBOOKS.filter(b => b.genre === activeGenre);

  return (
    <>
      <main className="bg-black min-h-screen">
        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] font-display font-black text-cream flex items-center justify-center select-none pointer-events-none"
            style={{ fontSize: '35vw', lineHeight: 1 }}
            aria-hidden
          >
            BOOKS
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <p className="font-mono text-yellow text-xs tracking-[0.3em] mb-6">AUDIOBOOK CATALOG</p>
            <h1 className="font-display text-6xl md:text-8xl font-black text-cream leading-none mb-6">
              Stories<br />Given Voice.
            </h1>
            <p className="font-editorial italic text-2xl text-warm-gray max-w-lg">
              Over two hundred titles narrated. Each one a world unto itself.
            </p>
          </div>
        </section>

        {/* Filter */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <div className="flex flex-wrap gap-3">
            {GENRES.map(g => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className={`font-mono text-xs px-4 py-2 rounded-full transition-colors ${
                  activeGenre === g
                    ? 'bg-yellow text-black'
                    : 'bg-deep text-warm-gray hover:text-cream'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filtered.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
