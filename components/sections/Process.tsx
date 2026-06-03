const STEPS = [
  { num: '01', title: 'Project Brief', desc: 'We start with a conversation. Tell us the story, the audience, the feeling. The more I understand your vision, the more precisely I can serve it.' },
  { num: '02', title: 'Voice Direction', desc: 'You share reference tracks, character breakdowns, or a simple style note. I translate direction into performance choices before a single second is recorded.' },
  { num: '03', title: 'Studio Recording', desc: 'Captured in a professional-grade home studio with broadcast-quality equipment. Clean, dry audio — ready for your post team or delivered fully mixed.' },
  { num: '04', title: 'Final Delivery', desc: 'Files your way: WAV, AIFF, MP3, chapter-split or continuous. Revision rounds included. On-time. Every time. No exceptions.' },
];

export default function Process() {
  return (
    <section className="bg-cream py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="font-mono text-black/40 text-xs tracking-[0.3em] mb-4">05 · HOW IT WORKS</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black leading-tight">
            Simple Process.<br />Exceptional Result.
          </h2>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-black/15 -z-0" />

          {STEPS.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-yellow border-4 border-cream flex items-center justify-center mb-6 relative z-10">
                <span className="font-mono text-xs font-bold text-black">{step.num}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="font-body text-sm text-[#2A2520] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-black">{step.num}</span>
                </div>
                {i < STEPS.length - 1 && <div className="w-px flex-1 bg-black/15 mt-3" />}
              </div>
              <div className="pb-8">
                <h3 className="font-display text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="font-body text-sm text-[#2A2520] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
