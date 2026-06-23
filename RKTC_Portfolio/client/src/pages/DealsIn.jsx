import { useState } from "react";

const CATEGORIES = ["All", "Cladding & Facade", "Glass & Transparent", "Ceiling Systems", "Sheets & Panels"];

const PRODUCTS = [
    // ── ACP SHEETS ──
    {
        id: 1,
        category: "Cladding & Facade",
        icon: "▪",
        name: "ACP Sheets",
        fullName: "Aluminium Composite Panels",
        tagline: "Modern facades, bold signage, premium interiors",
        desc: "Aluminium Composite Panels consist of two aluminium sheets bonded to a polyethylene or mineral core. Lightweight yet rigid, we install them for building facades, shopfronts, signage, and interior wall cladding.",
        specs: [
            { label: "Thickness", value: "Many Available" },
            { label: "Width", value: "1220mm / 1500mm" },
            { label: "Core Type", value: "PE (Polyethylene) / FR (Fire Retardant)" },
            { label: "Finish", value: "PVDF Coating / PE Coating" },
            { label: "Colors", value: "200+ standard shades + custom" },
            { label: "Application", value: "Exterior cladding, signage, interior walls" },
        ],
        brands: ["Alucobond", "Viva", "Reynobond", "Alucostar"],
        uses: ["Building Facades", "Signage Boards", "Interior Cladding", "Canopies", "Column Covers"],
    },

    // ── ALUMINIUM SECTIONS ──
    {
        id: 2,
        category: "Cladding & Facade",
        icon: "▧",
        name: "Aluminium Sections",
        fullName: "Aluminium Profiles & Extrusions",
        tagline: "Structural strength with a clean finish",
        desc: "We install extruded aluminium profiles for doors, windows, curtain wall systems, partitions, shopfronts, and structural glazing. Corrosion-resistant and lightweight with anodised or powder-coated finishes.",
        specs: [
            { label: "Alloy", value: "6063 T5 / T6 Grade" },
            { label: "Finish", value: "Anodised / Powder Coated / Mill Finish" },
            { label: "Colors", value: "Silver, Black, Bronze, Champagne + custom" },
            { label: "Sections", value: "Z, L, T, U, Square, Rectangular, Custom" },
            { label: "Length", value: "Standard 6m / Custom cut" },
            { label: "Application", value: "Doors, windows, curtain walls, partitions" },
        ],
        brands: ["Jindal", "Hindalco", "Century", "Nalco"],
        uses: ["Window Frames", "Door Frames", "Curtain Walls", "Partitions", "Shopfronts", "Railings"],
    },

    // ── TOUGHENED GLASS ──
    {
        id: 3,
        category: "Glass & Transparent",
        icon: "◈",
        name: "Toughened Glass",
        fullName: "Tempered Safety Glass",
        tagline: "Safety, clarity and structural integrity",
        desc: "Toughened (tempered) glass is 4–5x stronger than normal glass. When broken, it shatters into small blunt pieces instead of sharp shards. We install it for railings, partitions, storefronts and facades.",
        specs: [
            { label: "Thickness", value: "4mm / 6mm / 8mm / 10mm / 12mm" },
            { label: "Max Size", value: "2440mm × 3660mm" },
            { label: "Tints Available", value: "Clear, Green, Blue, Bronze, Grey, Black" },
            { label: "Finish", value: "Polished edges, bevelled, sandblasted on request" },
            { label: "Standard", value: "IS 2553 / EN 12150 compliant" },
            { label: "Application", value: "Railings, partitions, storefronts, facades" },
        ],
        brands: ["Saint-Gobain", "Asahi", "Modi Guard", "Gujarat Guardian"],
        uses: ["Glass Railings", "Storefronts", "Shower Enclosures", "Partitions", "Glass Doors", "Skylights"],
    },

    // ── PVC SHEETS ──
    {
        id: 4,
        category: "Sheets & Panels",
        icon: "▬",
        name: "PVC Sheets",
        fullName: "PVC Foam & Rigid Sheets",
        tagline: "Lightweight, waterproof, easy to work with",
        desc: "PVC sheets are moisture-resistant, termite-proof and extremely lightweight. We install them for false ceilings, wall panelling, wet areas and display boards. Available in foam and rigid variants.",
        specs: [
            { label: "Thickness", value: "1mm to 25mm" },
            { label: "Sheet Size", value: "1220mm × 2440mm (standard)" },
            { label: "Type", value: "Foam PVC / Rigid PVC / Celuka" },
            { label: "Colors", value: "White, Ivory, Grey, Black + more" },
            { label: "Density", value: "0.4 g/cm³ (foam) to 1.4 g/cm³ (rigid)" },
            { label: "Application", value: "Ceilings, wall panels, bathroom cladding" },
        ],
        brands: ["Palight", "Veka", "Supreme", "Finolex"],
        uses: ["False Ceilings", "Wall Cladding", "Bathroom Panels", "Display Boards", "Furniture Backing", "Signage"],
    },

    // ── HPL ──
    {
        id: 5,
        category: "Cladding & Facade",
        icon: "▰",
        name: "HPL Cladding",
        fullName: "High Pressure Laminate Panels",
        tagline: "Durable exterior surfaces with designer finishes",
        desc: "High Pressure Laminate (HPL) panels are extremely hard and scratch-resistant. We install them for exterior cladding and interior wall surfaces in commercial and residential projects.",
        specs: [
            { label: "Thickness", value: "3mm / 6mm / 8mm / 10mm / 12mm" },
            { label: "Sheet Size", value: "1300mm × 3050mm (standard)" },
            { label: "Finish", value: "Matte / Gloss / Woodgrain / Stone / Metallic" },
            { label: "UV Resistance", value: "Yes — suitable for exterior cladding" },
            { label: "Standard", value: "EN 438 / IS 2046 compliant" },
            { label: "Application", value: "Exterior facades, interior walls, furniture" },
        ],
        brands: ["Greenlam", "Merino", "Formica", "Abet Laminati"],
        uses: ["Exterior Cladding", "Interior Wall Panels", "Modular Furniture", "Hospital Walls", "Lab Surfaces", "Locker Panels"],
    },

    // ── ACRYLIC SHEETS ──
    {
        id: 6,
        category: "Glass & Transparent",
        icon: "◐",
        name: "Acrylic Sheets",
        fullName: "Cast & Extruded Acrylic (PMMA)",
        tagline: "Crystal clarity for signs, displays and décor",
        desc: "Acrylic (PMMA) sheets are a lightweight, shatter-resistant alternative to glass with 92% light transmission. We install them for signage, display counters, partitions and decorative applications.",
        specs: [
            { label: "Thickness", value: "1.5mm to 25mm" },
            { label: "Sheet Size", value: "1220mm × 2440mm / 2050mm × 3050mm" },
            { label: "Type", value: "Cast / Extruded" },
            { label: "Colors", value: "Clear, 80+ solid colours, mirror, frosted, opal" },
            { label: "Light Transmission", value: "Up to 92% (clear)" },
            { label: "Application", value: "Signage, displays, partitions, décor" },
        ],
        brands: ["Plexiglas", "Perspex", "Lucite", "Sumipex"],
        uses: ["LED Signage", "Display Counters", "Partition Screens", "Aquariums", "Decorative Panels", "Light Diffusers"],
    },

    // ── FALSE CEILING ──
    {
        id: 7,
        category: "Ceiling Systems",
        icon: "▦",
        name: "False Ceiling",
        fullName: "False Ceiling Systems & Accessories",
        tagline: "Complete ceiling solutions for every space",
        desc: "We install complete false ceiling systems including gypsum boards, grid systems (T-bar), metal tiles and PVC ceiling panels. Suitable for commercial offices, malls, hospitals, hotels and residential spaces.",
        specs: [
            { label: "Types", value: "Gypsum / Grid T-bar / Metal Tile / PVC / Stretch" },
            { label: "Grid Size", value: "600×600mm / 600×1200mm (standard)" },
            { label: "Board Thickness", value: "9.5mm / 12.5mm (gypsum)" },
            { label: "Suspension", value: "MS hanger rods, perimeter channels, springs" },
            { label: "Fire Rating", value: "Available in fire-rated variants" },
            { label: "Application", value: "Offices, malls, hospitals, homes, hotels" },
        ],
        brands: ["Saint-Gobain Gyproc", "USG Boral", "Armstrong", "Knauf"],
        uses: ["Office Ceilings", "Mall Interiors", "Hospital Rooms", "Hotel Lobbies", "Home Interiors", "Retail Stores"],
    },
];

export default function DealsIn() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeProduct, setActiveProduct] = useState(null);

    const filtered =
        activeCategory === "All"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === activeCategory);

    return (
        <div className="bg-[#0d0f14] text-[#f0ede6] font-sans min-h-screen">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        body { font-family: 'Inter', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease forwards; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-in { animation: slideIn 0.4s ease forwards; }

        .prod-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: #c9a84c;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .prod-card:hover::after { transform: scaleX(1); }

        /* custom scrollbar inside detail panel */
        .detail-scroll::-webkit-scrollbar { width: 4px; }
        .detail-scroll::-webkit-scrollbar-track { background: transparent; }
        .detail-scroll::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.25); border-radius: 4px; }
      `}</style>

            {/* ── PAGE HEADER ── */}
            <div className="px-6 md:px-12 pt-28 pb-14 border-b border-[rgba(201,168,76,0.12)]">
                <div className="flex items-center gap-3 mb-5 fade-up">
                    <span className="block w-8 h-[1px] bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase">
                       Our Services
                    </span>
                </div>
                <h1 className="font-display text-[clamp(48px,9vw,100px)] leading-[0.92] tracking-[2px] text-[#f0ede6] fade-up">
                    WHAT WE
                    <br />
                    <span className="text-[#c9a84c]">DEAL IN</span>
                </h1>
                <p className="text-[#7a7570] text-[15px] leading-relaxed max-w-lg mt-5 fade-up">
                    We install premium surface materials for architects, contractors and
interior designers. Click any service to see full details.
                </p>
            </div>

            {/* ── FILTER TABS ── */}
            <div className="px-6 md:px-12 pt-10 pb-2 flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setActiveProduct(null); }}
                        className={`text-[12px] font-semibold tracking-[0.14em] uppercase px-5 py-2 rounded border transition-all duration-200 ${activeCategory === cat
                            ? "bg-[#c9a84c] text-[#0d0f14] border-[#c9a84c]"
                            : "bg-transparent text-[#5a5650] border-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.5)] hover:text-[#c9a84c]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* ── MAIN LAYOUT: grid + detail panel ── */}
            <div className="px-6 md:px-12 py-8 flex flex-col lg:flex-row gap-6 min-h-[600px]">

                {/* ── PRODUCT GRID ── */}
                <div className={`grid gap-[2px] transition-all duration-300 ${activeProduct ? "lg:w-[45%] grid-cols-1 sm:grid-cols-2" : "w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                    {filtered.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => setActiveProduct(activeProduct?.id === p.id ? null : p)}
                            className={`prod-card relative group bg-[#141720] border p-7 min-h-[190px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${activeProduct?.id === p.id
                                ? "border-[#c9a84c] bg-[#181c26]"
                                : "border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.4)] hover:bg-[#181c26]"
                                }`}
                        >
                            <div>
                                <div className="text-[26px] text-[#c9a84c] mb-4">{p.icon}</div>
                                <div className="font-display text-[20px] tracking-[1px] text-[#f0ede6] mb-1">
                                    {p.name}
                                </div>
                                <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#5a5650] mb-3">
                                    {p.category}
                                </div>
                                <p className="text-[12px] text-[#3a3830] leading-relaxed">
                                    {p.tagline}
                                </p>
                            </div>
                            <div className={`self-end text-[#c9a84c] text-lg mt-3 transition-all duration-200 ${activeProduct?.id === p.id ? "opacity-100 rotate-90" : "opacity-0 group-hover:opacity-100"}`}>
                                →
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── DETAIL PANEL ── */}
                {activeProduct && (
                    <div className="lg:flex-1 bg-[#141720] border border-[#c9a84c] rounded overflow-hidden slide-in">
                        <div className="detail-scroll overflow-y-auto max-h-[80vh] lg:max-h-none lg:h-full">

                            {/* Header */}
                            <div className="px-8 pt-8 pb-6 border-b border-[rgba(201,168,76,0.15)] flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-[32px] text-[#c9a84c] mb-3">{activeProduct.icon}</div>
                                    <h2 className="font-display text-[32px] tracking-[1.5px] text-[#f0ede6] leading-tight">
                                        {activeProduct.name}
                                    </h2>
                                    <p className="text-[12px] text-[#5a5650] tracking-[0.1em] uppercase mt-1">
                                        {activeProduct.fullName}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setActiveProduct(null)}
                                    className="text-[#5a5650] hover:text-[#c9a84c] text-xl transition-colors mt-1 shrink-0"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Description */}
                            <div className="px-8 py-6 border-b border-[rgba(201,168,76,0.1)]">
                                <p className="text-[13px] text-[#a09c92] leading-[1.85]">
                                    {activeProduct.desc}
                                </p>
                            </div>

                            {/* Specs */}
                            <div className="px-8 py-6 border-b border-[rgba(201,168,76,0.1)]">
                                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-4">
                                    Specifications
                                </div>
                                <div className="flex flex-col gap-0">
                                    {activeProduct.specs.map((s, i) => (
                                        <div
                                            key={s.label}
                                            className={`flex justify-between gap-4 py-3 text-[13px] ${i !== activeProduct.specs.length - 1 ? "border-b border-[rgba(201,168,76,0.07)]" : ""}`}
                                        >
                                            <span className="text-[#5a5650] min-w-[120px]">{s.label}</span>
                                            <span className="text-[#a09c92] text-right">{s.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Common Uses */}
                            <div className="px-8 py-6 border-b border-[rgba(201,168,76,0.1)]">
                                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-4">
                                    Common Uses
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {activeProduct.uses.map((u) => (
                                        <span
                                            key={u}
                                            className="text-[11px] font-medium tracking-[0.08em] px-3 py-1 border border-[rgba(201,168,76,0.2)] text-[#7a7570] rounded"
                                        >
                                            {u}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Brands */}
                            <div className="px-8 py-6 border-b border-[rgba(201,168,76,0.1)]">
                                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-4">
                                Common Brands 
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {activeProduct.brands.map((b) => (
                                        <span
                                            key={b}
                                            className="font-display text-[16px] tracking-[1.5px] text-[#5a5650]"
                                        >
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="px-8 py-6">
                                <a
                                    href="/contact"
                                    className="block w-full text-center bg-[#c9a84c] text-[#0d0f14] font-semibold text-[13px] py-4 rounded tracking-wider hover:bg-[#e0b95a] transition-colors duration-200"
                                >
                                    Enquire About {activeProduct.name} →
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ── BOTTOM CTA ── */}
            <div className="px-6 md:px-12 py-16 border-t border-[rgba(201,168,76,0.12)]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[1px] text-[#f0ede6]">
                            NEED A CUSTOM QUOTE?
                        </h2>
                        <p className="text-[13px] text-[#5a5650] mt-1">
                            Got a project in mind? Tell us what you need installed and we'll get back with a quote.
                        </p>
                    </div>
                    <a
                        href="/contact"
                        className="bg-[#c9a84c] text-[#0d0f14] font-semibold text-[14px] px-10 py-4 rounded tracking-wider whitespace-nowrap hover:bg-[#e0b95a] hover:-translate-y-[2px] transition-all duration-200"
                    >
                        Get a Quote →
                    </a>
                </div>
            </div>
        </div>
    );
}
