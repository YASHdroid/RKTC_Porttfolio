import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const NAV_LINKS = ["Home", "Products", "Past Work", "About", "Contact"];

const PRODUCTS = [
    {
        icon: "▪",
        name: "ACP Sheets",
        desc: "We install Aluminium Composite Panels for modern facades & interiors and finishes available.",
        span: false,
    },
    {
        icon: "▧",
        name: "Aluminium Sections",
        desc: "We install structural & decorative aluminium profiles for doors, windows, curtain walls, and partitions.",
        span: false,
    },
    {
        icon: "◈",
        name: "Toughened Glass",
        desc: "We install safety glass for railings, partitions, storefronts and facades. Custom sizes and tints available.",
        span: false,
    },
    {
        icon: "▬",
        name: "PVC Sheets",
        desc: "We install lightweight, durable PVC panels for ceilings, wall linings and moisture-prone areas.",
        span: false,
    },
    {
        icon: "▰",
        name: "HPL Cladding",
        desc: "We install High Pressure Laminate panels for exterior cladding & interior wall surfaces. Scratch & UV resistant",
        span: false,
    },
    {
        icon: "◐",
        name: "Acrylic Sheets",
        desc: "We install crystal-clear and coloured acrylic for signage, display, partitions and decorative applications",
        span: false,
    },
    {
        icon: "▦",
        name: "False Ceiling Systems",
        desc: "We handle complete false ceiling installations  commercial & residential spaces.",
        span: true,
    },
];

const WHY_POINTS = [
    {
        num: "1",
        title: "Complete Installation Service",
        desc: "ACP, glass, HPL, PVC, aluminium, acrylic — we handle installation for all major surface materials.",
    },
    {
        num: "2",
        title: "Contractor-Trusted Work",
        desc: "Preferred installation partner for architects, interior designers, and contractors across the region for over a decade.",
    },
    {
        num: "3",
        title: "Custom Sizes & Fast Installation",
        desc: "We show up on time and get the job done so your projects stay on schedule without compromise.",
    },
    {
        num: "4",
        title: "Competitive  Pricing",
        desc: "Fair pricing for every job, big or small. Get a quote within 24 hours.",
    },
];

const MARQUEE_ITEMS = [
    "ACP SHEETS",
    "ALUMINIUM PROFILES",
    "TOUGHENED GLASS",
    "PVC SHEETS",
    "HPL CLADDING",
    "FALSE CEILING",
    "ACRYLIC SHEETS",
];

export default function Landing() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Intersection observer for fade-in-up animations
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("revealed");
                        observer.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#0d0f14] text-[#f0ede6] font-sans overflow-x-hidden">
            {/* ── GLOBAL STYLES injected once ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        /* reveal animation */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .revealed { opacity: 1; transform: translateY(0); }

        /* marquee */
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track { animation: marqueeScroll 22s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* product card underline sweep */
        .prod-card { position: relative; }
        .prod-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: #c9a84c;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .prod-card:hover::after { transform: scaleX(1); }

        /* hero radial glow */
        .hero-glow {
          background: radial-gradient(ellipse 60% 60% at 70% 40%, rgba(201,168,76,0.09) 0%, transparent 70%);
        }
        /* cta glow */
        .cta-glow {
          background: radial-gradient(ellipse 60% 80% at 90% 50%, rgba(201,168,76,0.07) 0%, transparent 70%);
        }

        /* scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0d0f14; }
        ::-webkit-scrollbar-thumb { background: #2a2720; border-radius: 4px; }

        @media (max-width: 640px) {
          .hero-stats-row { flex-direction: row !important; }
        }
      `}</style>

            {/* ════════════ NAVBAR ════════════ */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${scrolled
                    ? "bg-[rgba(13,15,20,0.96)] border-b border-[rgba(201,168,76,0.18)] backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <span className="font-display text-[28px] tracking-[4px] text-[#c9a84c]">
                    RKTC
                </span>


                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 list-none">
                    {NAV_LINKS.map((l) => (
                        <li key={l}>
                            <Link
                                to={
                                    l === "Home"
                                        ? "/"
                                        : l === "Products"
                                            ? "/deals"
                                            : l === "Past Work"
                                                ? "/pastwork"
                                                : `/${l.toLowerCase()}`
                                }

                                className="
          text-[#a09c92]
          text-xs
          font-medium
          tracking-widest
          uppercase
          hover:text-[#c9a84c]
          transition-colors
          duration-200
        "
                            >
                                {l}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-[2px] bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block w-6 h-[2px] bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-[2px] bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-[#0d0f14] flex flex-col items-center justify-center gap-8 md:hidden">

                    {NAV_LINKS.map((l) => (
                        <Link
                            key={l}

                            to={
                                l === "Home"
                                    ? "/"
                                    : l === "Products"
                                        ? "/deals"
                                        : l === "Past Work"
                                            ? "/pastwork"
                                            : `/${l.toLowerCase()}`
                            }

                            onClick={() => setMenuOpen(false)}

                            className="
          font-display
          text-3xl
          tracking-[4px]
          text-[#f0ede6]
          hover:text-[#c9a84c]
        "
                        >
                            {l}
                        </Link>
                    ))}

                </div>
            )}
            {/* ════════════ HERO ════════════ */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden"
            >
                {/* Glow overlay */}
                <div className="hero-glow absolute inset-0 pointer-events-none" />

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6 reveal">
                    <span className="block w-8 h-[1px] bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase">
                        Premium Building Installation
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-[clamp(60px,12vw,128px)] leading-[0.9] tracking-[2px] text-[#f0ede6] max-w-4xl mb-7 reveal">
                    SURFACE
                    <br />
                    <span className="text-[#c9a84c]">EVERY</span>
                    <br />
                    VISION
                </h1>

                {/* Sub */}
                <p className="text-[#7a7570] text-base leading-relaxed max-w-md mb-12 reveal">
                    From ACP cladding to toughened glass — RKTC installs premium surface materials for architects and contractors across the region.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-16 md:mb-0 reveal">
                    <a
                        href="products"
                        className="bg-[#c9a84c] text-[#0d0f14] font-semibold text-sm px-8 py-4 rounded tracking-wider hover:bg-[#e0b95a] hover:-translate-y-[2px] transition-all duration-200"
                    >
                        Explore Products
                    </a>
                    <a
                        href="pastwork"
                        className="border border-[rgba(201,168,76,0.4)] text-[#c9a84c] font-medium text-sm px-8 py-4 rounded tracking-wider hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.07)] transition-all duration-200"
                    >
                        View Past Work
                    </a>
                </div>

                {/* Stats — desktop: absolute right; mobile: inline row */}
                <div className="md:absolute md:right-12 md:bottom-24 flex flex-row md:flex-col gap-10 md:gap-8 md:text-right">
                    {[
                        { num: "500+", label: "Projects Completed" },
                        { num: "12+", label: "Years in Business" },
                        { num: "8", label: "Services Offered" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="font-display text-[48px] text-[#c9a84c] leading-none">
                                {s.num}
                            </div>
                            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#5a5650] mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════ MARQUEE ════════════ */}
            <div
                className="overflow-hidden border-t border-b border-[rgba(201,168,76,0.15)] py-4 bg-[rgba(201,168,76,0.04)]"
                aria-hidden="true"
            >
                <div className="marquee-track flex w-max gap-0">
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                        <span
                            key={i}
                            className="font-display text-[18px] tracking-[3px] text-[#5a5650] px-10 whitespace-nowrap"
                        >
                            <span className="text-[#c9a84c] mr-10">✦</span>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* ════════════ PRODUCTS ════════════ */}
            <section id="products" className="px-6 md:px-12 py-24">
                <div className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 reveal">
                    What We Offer
                </div>
                <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-[1px] text-[#f0ede6] mb-14 reveal">
                    WORK THAT DEFINES SPACES
                    <br />
                    <span className="text-[#c9a84c]">What We Do</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
                    {PRODUCTS.map((p) => (
                        <div
                            key={p.name}
                            className={`prod-card group bg-[#141720] border border-[rgba(201,168,76,0.1)] p-8 min-h-[220px] flex flex-col justify-between cursor-pointer hover:border-[rgba(201,168,76,0.45)] hover:bg-[#181c26] transition-all duration-250 reveal ${p.span ? "sm:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            <div>
                                <div className="text-3xl mb-5 text-[#c9a84c]">{p.icon}</div>
                                <div className="font-display text-[22px] tracking-[1.5px] text-[#f0ede6] mb-2">
                                    {p.name}
                                </div>
                                <div className="text-[13px] text-[#5a5650] leading-relaxed">
                                    {p.desc}
                                </div>
                            </div>
                            <div className="self-end text-[#c9a84c] text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════ WHY US ════════════ */}
            <section id="why" className="bg-[#0a0c10] px-6 md:px-12 py-24">
                <div className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 reveal">
                    Why Choose RKTC
                </div>
                <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-[1px] text-[#f0ede6] mb-14 reveal">
                    BUILT ON
                    <br />
                    <span className="text-[#c9a84c]">TRUST & QUALITY</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Visual block */}
                    <div className="relative aspect-[4/3] bg-[#141720] border border-[rgba(201,168,76,0.15)] rounded overflow-hidden flex items-center justify-center reveal">
                        <div className="font-display text-[120px] text-[rgba(201,168,76,0.06)] tracking-[-4px] leading-none select-none">
                            RKTC
                        </div>
                        <div className="absolute bottom-6 left-6 text-[12px] tracking-[0.14em] uppercase text-[#c9a84c] font-semibold">
                            Est. Since 2012
                        </div>
                    </div>

                    {/* Points */}
                    <div className="flex flex-col gap-8">
                        {WHY_POINTS.map((wp) => (
                            <div key={wp.num} className="flex gap-5 items-start reveal">
                                <div className="font-display text-[40px] text-[rgba(201,168,76,0.28)] leading-none min-w-[36px]">
                                    {wp.num}
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-semibold text-[#f0ede6] mb-1">
                                        {wp.title}
                                    </h3>
                                    <p className="text-[13px] text-[#5a5650] leading-relaxed">
                                        {wp.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════ CTA BANNER ════════════ */}
            <section id="contact" className="px-6 md:px-12 py-16">
                <div className="relative bg-[#141720] border border-[rgba(201,168,76,0.2)] rounded p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden reveal">
                    <div className="cta-glow absolute inset-0 pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="font-display text-[clamp(32px,5vw,60px)] leading-[1.02] tracking-[1px] text-[#f0ede6]">
                            READY TO START
                            <br />
                            <span className="text-[#c9a84c]">YOUR PROJECT?</span>
                        </h2>
                        <p className="text-[14px] text-[#7a7570] mt-2">
                            Tell us what you need installed and we'll get back with a quote within 24 hours.
                        </p>
                    </div>
                    <a
                        href="mailto:info@rktc.in"
                        className="relative z-10 bg-[#c9a84c] text-[#0d0f14] font-semibold text-[15px] px-10 py-4 rounded tracking-wider whitespace-nowrap hover:bg-[#e0b95a] hover:-translate-y-[2px] transition-all duration-200"
                    >
                        Get a Free Quote →
                    </a>
                </div>
            </section>

            {/* ════════════ FOOTER ════════════ */}
            <footer className="border-t border-[rgba(201,168,76,0.12)] px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-display text-[22px] tracking-[4px] text-[#c9a84c]">
                    RKTC
                </span>
                <div className="flex gap-6">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l}
                            href="#"
                            className="text-[#3a3830] text-[12px] tracking-wider uppercase hover:text-[#c9a84c] transition-colors duration-200"
                        >
                            {l}
                        </a>
                    ))}
                </div>
                <p className="text-[12px] text-[#3a3830]">
                    © 2025 RKTC Portfolio. All rights reserved.
                </p>
            </footer>
        </div>
    );
}