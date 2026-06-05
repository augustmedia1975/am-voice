export default function About() {
  return (
    <section className="relative bg-cream clip-diagonal-reverse py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-start">
          {/* Left */}
          <div className="relative">
            {/* Editorial number */}
            <span
              className="absolute -top-8 -left-4 font-editorial text-deep/10 select-none pointer-events-none leading-none"
              style={{ fontSize: '180px' }}
              aria-hidden
            >
              01
            </span>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-black leading-tight mb-8 relative">
              A Voice With Range.<br />
              A Narrator With Soul.
            </h2>

            <div className="space-y-5 text-[17px] text-[#2A2520] leading-relaxed font-body mb-10">
              <p>
                With over a decade behind the microphone, Adam Roussell has lent his voice to more than two hundred audiobooks, countless brand campaigns, and the kind of trailer reads that make audiences lean forward. The journey spans literary fiction and corporate boardrooms, animated characters and documentary whispers.
              </p>
              <p>
                What sets Adam apart isn&apos;t just technical precision — it&apos;s the ability to find the emotional heartbeat of a script. Whether the brief calls for authority or intimacy, urgency or warmth, the performance arrives fully inhabited. Not performed. Lived.
              </p>
              <p>
                Based in New Orleans with a professional home studio, Adam collaborates with publishers, ad agencies, game studios, and independent authors worldwide — delivering broadcast-ready audio, on time, every time.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              <span className="font-body font-bold text-sm bg-yellow text-black px-5 py-2.5 rounded-full">
                200+ Audiobooks Narrated
              </span>
              <span className="font-body font-bold text-sm bg-yellow text-black px-5 py-2.5 rounded-full">
                50+ Brand Voices
              </span>
              <span className="font-body font-bold text-sm bg-yellow text-black px-5 py-2.5 rounded-full">
                10+ Years Experience
              </span>
            </div>
          </div>

          {/* Right — portrait placeholder */}
          <div className="relative">
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #2A1F1A 0%, #1A1208 50%, #0D0D0D 100%)',
                boxShadow: '8px 8px 0px #F5C800',
              }}
            >
              {/* Grain */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(245,200,0,0.15) 0%, transparent 60%)`,
                }}
              />
              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-end p-8">
                <p className="font-editorial italic text-warm-gray/40 text-sm">Portrait Placeholder</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-black text-white font-body text-xs font-bold px-4 py-2 rounded-full shadow-xl">
              SAG-AFTRA Member
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
