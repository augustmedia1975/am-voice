import ServiceCard from '@/components/ServiceCard';

const SERVICES = [
  {
    title: 'Audiobook Narration',
    description: 'Full-length literary performance across every genre — fiction, non-fiction, self-help, thriller, and beyond. Pacing, character distinction, emotional range: all present and accounted for.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Commercial & Ad VO',
    description: 'From :15 radio spots to 60-second streaming pre-rolls, Adam delivers the kind of voice that cuts through noise and earns trust — in one take.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Trailer & Promo',
    description: 'The theatrical baritone when you need it. The conspiratorial whisper. The voice that makes a preview feel like an event. AM has been the voice behind campaigns that moved audiences worldwide.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-.125m0 0a1.125 1.125 0 011.125-1.125m16.125 1.25v-.125A1.125 1.125 0 0019.5 18.375m0 1.125H18m1.125 0h1.5a1.125 1.125 0 001.125-1.125M21 5.625a1.125 1.125 0 00-1.125-1.125H4.125A1.125 1.125 0 003 5.625v13.5m18-13.5v13.5" />
      </svg>
    ),
  },
  {
    title: 'Corporate & E-Learning',
    description: 'Clear, engaging, authoritative — without being clinical. AM transforms dense training content into something people actually retain. Trusted by Fortune 500 companies and independent educators alike.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-yellow text-xs tracking-[0.3em] mb-4">02 · WHAT I DO</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream leading-tight">
            Every Project.<br />Perfectly Voiced.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
