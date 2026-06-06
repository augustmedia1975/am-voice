'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AMLogo from './AMLogo';

const NAV_LINKS = [
  { label: 'Work', href: '/audiobooks' },
  { label: 'Voices', href: '/demos' },
  { label: 'Reel', href: '/#reel' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex-shrink-0">
          <AMLogo className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-warm-gray hover:text-cream transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-body text-sm font-bold bg-yellow text-black px-6 py-2.5 rounded-full hover:bg-yellow/90 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-cream transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-cream transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-cream transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-lg text-warm-gray"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-body text-sm font-bold bg-yellow text-black px-6 py-3 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
