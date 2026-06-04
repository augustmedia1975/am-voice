'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

const PROJECT_TYPES = [
  'Audiobook Narration',
  'Commercial / Ad VO',
  'Trailer & Promo',
  'Corporate / E-Learning',
  'Animation / Character',
  'Documentary',
  'Other',
];

const BUDGET_RANGES = [
  'Under $500',
  '$500 – $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  'Let\'s discuss',
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <main className="bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20">
            {/* Form */}
            <div>
              <p className="font-mono text-yellow text-xs tracking-[0.3em] mb-6">GET IN TOUCH</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-cream leading-tight mb-12">
                Let&apos;s Make<br />Something.
              </h1>

              {submitted ? (
                <div className="bg-deep border border-yellow/20 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="#0D0D0D" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-3">Message Received</h3>
                  <p className="font-body text-warm-gray">I&apos;ll be in touch within 24 hours. Looking forward to it.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-xs text-warm-gray/60 tracking-widest block mb-2">NAME</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-deep border border-white/10 rounded-xl px-5 py-4 text-cream font-body text-sm focus:outline-none focus:border-yellow/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-warm-gray/60 tracking-widest block mb-2">EMAIL</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-deep border border-white/10 rounded-xl px-5 py-4 text-cream font-body text-sm focus:outline-none focus:border-yellow/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-warm-gray/60 tracking-widest block mb-2">PROJECT TYPE</label>
                    <div className="relative">
                      <select
                        required
                        className="w-full appearance-none bg-deep border border-white/10 rounded-xl px-5 py-4 text-cream font-body text-sm focus:outline-none focus:border-yellow/50 transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a project type</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-warm-gray/60 tracking-widest block mb-2">BUDGET RANGE</label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none bg-deep border border-white/10 rounded-xl px-5 py-4 text-cream font-body text-sm focus:outline-none focus:border-yellow/50 transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a range</option>
                        {BUDGET_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-warm-gray/60 tracking-widest block mb-2">MESSAGE</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full bg-deep border border-white/10 rounded-xl px-5 py-4 text-cream font-body text-sm focus:outline-none focus:border-yellow/50 transition-colors resize-none"
                      placeholder="Tell me about the project — the story, the tone, the deadline. The more detail, the better."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow text-black font-body font-bold text-sm py-4 rounded-full hover:bg-yellow/90 transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-8 pt-32">
              <div className="bg-deep border border-white/5 rounded-2xl p-8">
                <h3 className="font-display text-xl text-cream mb-6">Studio Details</h3>
                <div className="space-y-4 font-body text-sm text-warm-gray">
                  <div>
                    <p className="font-mono text-xs text-yellow/60 tracking-widest mb-1">RESPONSE TIME</p>
                    <p>Within 24 hours, Mon – Fri</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-yellow/60 tracking-widest mb-1">LOCATION</p>
                    <p>New Orleans, EST</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-yellow/60 tracking-widest mb-1">AVAILABILITY</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow rounded-full animate-pulse" />
                      <p>Currently accepting new projects</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-yellow/60 tracking-widest mb-1">EMAIL</p>
                    <p>hello@amstudio.io</p>
                  </div>
                </div>
              </div>

              <div className="bg-deep border border-white/5 rounded-2xl p-8">
                <h3 className="font-display text-xl text-cream mb-4">Studio Specs</h3>
                <ul className="space-y-2 font-body text-sm text-warm-gray">
                  {[
                    'Neumann U87 / Shure SM7B',
                    'Universal Audio Apollo interface',
                    'Fully treated isolation booth',
                    'Adobe Audition / Pro Tools capable',
                    'Source-Connect & ipDTL ready',
                    'Deliverables: WAV, AIFF, MP3',
                  ].map(spec => (
                    <li key={spec} className="flex items-center gap-2">
                      <span className="text-yellow text-xs">▸</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
