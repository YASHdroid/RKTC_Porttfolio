const STATS = [
  { num: "1000+", label: "Projects Completed" },
  { num: "12+", label: "Years in Business" },
  { num: "8", label: "Services Offered" },
  { num: "750+", label: "Happy Clients" },
];

const VALUES = [
  {
    icon: "◈",
    title: "Quality First",
    desc: "We work only with trusted manufacturers and use materials that meet industry standards for durability, finish, and safety.",
  },
  {
    icon: "▰",
    title: "Honest Pricing",
    desc: "No hidden charges. Fair pricing for every job, and quotes within 24 hours — always.",
  },
  {
    icon: "▧",
    title: "On-Site, On-Schedule",
    desc: "We show up on time and complete installations efficiently so your projects never face delays.",
  },
  {
    icon: "◐",
    title: "Expert Guidance",
    desc: "Not sure which material suits your project? Our team helps you pick the right solution for the right application.",
  },
];

const TIMELINE = [
  {
    year: "2012",
    title: "Founded",
    desc: "RKTC started as a small aluminium and ACP installation service in Haryana, serving local contractors and builders.",
  },
  {
    year: "2015",
    title: "Expanded Services",
    desc: "Added toughened glass, PVC sheet and false ceiling installations to meet growing demand from architects.",
  },
  {
    year: "2018",
    title: "Grew Our Team",
    desc: "Expanded our installation team and took on larger commercial projects across the region.",
  },
  {
    year: "2025",
    title: "Going Digital",
    desc: "Launched our online portfolio to connect with architects, designers and contractors across India.",
  },
];
export default function About() {
  return (
    <div className="bg-[#0d0f14] text-[#f0ede6] font-sans min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        body { font-family: 'Inter', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.65s ease forwards; }

        .timeline-line {
          position: absolute;
          left: 38px;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.3) 90%, transparent);
        }
      `}</style>

      {/* ── PAGE HEADER ── */}
      <div className="px-6 md:px-12 pt-28 pb-14 border-b border-[rgba(201,168,76,0.12)]">
        <div className="flex items-center gap-3 mb-5 fade-up">
          <span className="block w-8 h-[1px] bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase">
            Our Story
          </span>
        </div>
        <h1 className="font-display text-[clamp(48px,9vw,100px)] leading-[0.92] tracking-[2px] text-[#f0ede6] fade-up">
          WHO WE
          <br />
          <span className="text-[#c9a84c]">ARE</span>
        </h1>
      </div>

      {/* ── INTRO SPLIT ── */}
      <div className="px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — visual */}
        <div className="relative aspect-[4/3] bg-[#141720] border border-[rgba(201,168,76,0.12)] rounded overflow-hidden flex items-center justify-center">
          <div
            className="font-display text-[clamp(80px,14vw,160px)] text-[rgba(201,168,76,0.06)] tracking-[-4px] leading-none select-none"
          >
            RKTC
          </div>
          {/* decorative corner lines */}
          <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[rgba(201,168,76,0.3)]" />
          <span className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[rgba(201,168,76,0.3)]" />
          <span className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[rgba(201,168,76,0.3)]" />
          <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[rgba(201,168,76,0.3)]" />
          <div className="absolute bottom-5 left-6 text-[11px] tracking-[0.16em] uppercase text-[#c9a84c] font-semibold">
            Est. Since 2012
          </div>
        </div>

        {/* Right — text */}
        <div>
        <p className="text-[#a09c92] text-[15px] leading-[1.85] mb-6">
  RKTC is a Haryana-based installation company specialising in premium
  architectural surface solutions — serving contractors, interior
  designers, and architects across North India for over a decade.
</p>

<p className="text-[#7a7570] text-[14px] leading-[1.85] mb-6">
  We started with a simple idea: make it easier for builders to get
  quality installation services without dealing with multiple vendors.
  Today, we install everything from ACP sheets and aluminium sections to
  toughened glass, HPL cladding, PVC, acrylic, and false ceiling systems —
  all through one trusted team.
</p>

<p className="text-[#7a7570] text-[14px] leading-[1.85]">
  Whether you're cladding a commercial facade, fitting out a retail
  interior, or finishing a residential project — RKTC delivers the right
  installation at the right price, on time.
</p>



          {/* divider */}
          <div className="border-t border-[rgba(201,168,76,0.12)] mt-10 pt-8">
            <div className="border-l-2 border-[#c9a84c] pl-5">
              <p className="text-[14px] text-[#a09c92] italic leading-relaxed">
                "Our goal has always been simple — be the installation partner we ourselves always wished we had."
              </p>
              <p className="text-[12px] text-[#5a5650] mt-2 tracking-wider uppercase">
                — Founder, RKTC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="border-t border-b border-[rgba(201,168,76,0.12)] bg-[#0a0c10]">
        <div className="px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-[52px] text-[#c9a84c] leading-none mb-1">
                {s.num}
              </div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5a5650]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUR VALUES ── */}
      <div className="px-6 md:px-12 py-20">
        <div className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
          What We Stand For
        </div>
        <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.02] tracking-[1px] text-[#f0ede6] mb-14">
          OUR <span className="text-[#c9a84c]">VALUES</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group bg-[#141720] border border-[rgba(201,168,76,0.1)] p-8 hover:border-[rgba(201,168,76,0.4)] hover:bg-[#181c26] transition-all duration-250"
            >
              <div className="text-[28px] text-[#c9a84c] mb-5">{v.icon}</div>
              <div className="font-display text-[20px] tracking-[1px] text-[#f0ede6] mb-3">
                {v.title}
              </div>
              <p className="text-[13px] text-[#5a5650] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className="bg-[#0a0c10] px-6 md:px-12 py-20">
        <div className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
          How We Got Here
        </div>
        <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.02] tracking-[1px] text-[#f0ede6] mb-14">
          OUR <span className="text-[#c9a84c]">JOURNEY</span>
        </h2>

        <div className="relative max-w-2xl">
          {/* vertical line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-0">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="flex gap-8 pb-12 relative">
                {/* dot */}
                <div className="flex flex-col items-center z-10 min-w-[76px]">
                  <div className="w-4 h-4 rounded-full border-2 border-[#c9a84c] bg-[#0a0c10] mt-1" />
                </div>
                {/* content */}
                <div className="pb-2">
                  <div className="font-display text-[32px] text-[#c9a84c] leading-none mb-1">
                    {t.year}
                  </div>
                  <div className="text-[15px] font-semibold text-[#f0ede6] mb-2">
                    {t.title}
                  </div>
                  <p className="text-[13px] text-[#5a5650] leading-relaxed max-w-md">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="px-6 md:px-12 py-16">
        <div className="relative bg-[#141720] border border-[rgba(201,168,76,0.2)] rounded p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-display text-[clamp(28px,4vw,52px)] leading-[1.02] tracking-[1px] text-[#f0ede6]">
              WORK WITH US
            </h2>
            <p className="text-[14px] text-[#7a7570] mt-2 max-w-sm">
    Looking for a reliable installation partner for your next project?
Let's talk.
            </p>
          </div>
          <a
            href="/contact"
            className="relative z-10 bg-[#c9a84c] text-[#0d0f14] font-semibold text-[14px] px-10 py-4 rounded tracking-wider whitespace-nowrap hover:bg-[#e0b95a] hover:-translate-y-[2px] transition-all duration-200"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  );
}