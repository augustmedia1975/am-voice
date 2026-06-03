const ITEMS = [
  'AUDIOBOOKS', 'COMMERCIALS', 'TRAILERS', 'DOCUMENTARIES',
  'PODCASTS', 'E-LEARNING', 'VIDEO GAMES', 'VOICE ACTING',
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-yellow overflow-hidden py-4">
      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-body font-bold text-black text-sm tracking-widest px-6">{item}</span>
            <span className="text-black text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
