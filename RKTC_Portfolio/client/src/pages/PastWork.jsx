import { useState } from "react";

const CATEGORIES = ["All", "Facade & Cladding", "Glass Work", "Ceiling", "Interiors"];

const PROJECTS = [
    {
        id: 1,
        category: "Facade & Cladding",
        title: "Commercial Complex Facade",
        location: "Kurukshetra, Haryana",
        year: "2024",
        materials: ["ACP Sheets", "Aluminium Sections"],
        desc: "Full exterior cladding of a 6-storey commercial complex using PVDF-coated ACP panels in silver and charcoal finish with aluminium grid framework.",
        size: "large",
    },
    {
        id: 2,
        category: "Glass Work",
        title: "Showroom Glass Facade",
        location: "Ambala, Haryana",
        year: "2024",
        materials: ["Toughened Glass", "Aluminium Sections"],
        desc: "Full-height structural glazing for a luxury automobile showroom. 10mm clear toughened glass with black powder-coated aluminium framing.",
        size: "small",
    },
    {
        id: 3,
        category: "Ceiling",
        title: "Hospital False Ceiling",
        location: "Karnal, Haryana",
        year: "2023",
        materials: ["False Ceiling", "PVC Sheets"],
        desc: "Complete false ceiling installation across 3 floors of a private hospital — fire-rated gypsum boards in patient rooms and T-bar grid system in corridors.",
        size: "small",
    },
    {
        id: 4,
        category: "Interiors",
        title: "Corporate Office Fit-Out",
        location: "Chandigarh",
        year: "2023",
        materials: ["HPL Cladding", "Acrylic Sheets", "False Ceiling"],
        desc: "Interior fit-out for a 12,000 sq ft corporate office — HPL wall panels, acrylic partition screens, and metal tile ceiling system throughout.",
        size: "large",
    },
    {
        id: 5,
        category: "Facade & Cladding",
        title: "Petrol Station Canopy",
        location: "Pehowa, Haryana",
        year: "2023",
        materials: ["ACP Sheets", "Aluminium Sections"],
        desc: "Canopy cladding and signage fascia for a fuel station using bright white PE-coated ACP with backlit signage framework.",
        size: "small",
    },
    {
        id: 6,
        category: "Glass Work",
        title: "Office Glass Partitions",
        location: "Kurukshetra, Haryana",
        year: "2022",
        materials: ["Toughened Glass"],
        desc: "12mm frosted and clear toughened glass partition system for a multi-department office space with patch fittings and aluminium tracks.",
        size: "small",
    },
    {
        id: 7,
        category: "Interiors",
        title: "Retail Store Interior",
        location: "Yamunanagar, Haryana",
        year: "2022",
        materials: ["HPL Cladding", "Acrylic Sheets"],
        desc: "Full interior wall cladding using woodgrain HPL panels and coloured acrylic display counters for a premium fashion retail outlet.",
        size: "small",
    },
    {
        id: 8,
        category: "Ceiling",
        title: "Mall Food Court Ceiling",
        location: "Ambala, Haryana",
        year: "2022",
        materials: ["False Ceiling", "Aluminium Sections"],
        desc: "Large-span metal tile ceiling system for a 3,000 sq ft food court area with concealed lighting slots and ventilation integration.",
        size: "large",
    },
    {
        id: 9,
        category: "Facade & Cladding",
        title: "School Building Cladding",
        location: "Thanesar, Haryana",
        year: "2021",
        materials: ["ACP Sheets", "HPL Cladding"],
        desc: "Exterior cladding renovation for a private school — combination of HPL panels on lower floors and ACP sheets on upper facade for weather resistance.",
        size: "small",
    },
    {
        id: 10,
        category: "Glass Work",
        title: "Glass Staircase Railing",
        location: "Chandigarh",
        year: "2021",
        materials: ["Toughened Glass"],
        desc: "12mm clear toughened glass railing panels for a duplex staircase with stainless steel patch fittings and handrail integration.",
        size: "small",
    },
    {
        id: 11,
        category: "Interiors",
        title: "Hotel Lobby Renovation",
        location: "Karnal, Haryana",
        year: "2020",
        materials: ["HPL Cladding", "Acrylic Sheets", "Aluminium Sections"],
        desc: "Complete lobby interior renovation — stone-finish HPL feature wall, backlit acrylic reception counter, and decorative aluminium ceiling trim.",
        size: "large",
    },
    {
        id: 12,
        category: "Facade & Cladding",
        title: "Bank Branch Facade",
        location: "Panchkula, Haryana",
        year: "2020",
        materials: ["ACP Sheets", "Aluminium Sections"],
        desc: "Brand-compliant ACP cladding and signage fascia for a nationalised bank branch with fire-retardant core panels as per safety norms.",
        size: "small",
    },
];

const MATERIAL_COLORS = {
    "ACP Sheets": "border-[rgba(201,168,76,0.4)] text-[#c9a84c]",
    "Aluminium Sections": "border-[rgba(160,156,146,0.4)] text-[#a09c92]",
    "Toughened Glass": "border-[rgba(100,180,220,0.4)] text-[#64b4dc]",
    "PVC Sheets": "border-[rgba(120,200,140,0.4)] text-[#78c88c]",
    "HPL Cladding": "border-[rgba(180,120,80,0.4)] text-[#b47850]",
    "Acrylic Sheets": "border-[rgba(180,100,180,0.4)] text-[#b464b4]",
    "False Ceiling": "border-[rgba(100,160,220,0.4)] text-[#64a0dc]",
};

function ProjectCard({ project, onClick }) {
    return (
        <div
            onClick={() => onClick(project)}
            className={`group relative bg-[#141720] border border-[rgba(201,168,76,0.1)] overflow-hidden cursor-pointer hover:border-[rgba(201,168,76,0.4)] transition-all duration-250 ${project.size === "large" ? "md:col-span-2" : ""
                }`}
        >
            {/* Image placeholder */}
            <div
                className={`relative bg-[#0a0c10] flex items-center justify-center overflow-hidden ${project.size === "large" ? "h-56" : "h-44"
                    }`}
            >
                <div className="font-display text-[80px] text-[rgba(201,168,76,0.05)] leading-none select-none tracking-widest">
                    {project.id.toString().padStart(2, "0")}
                </div>
                {/* Corner brackets */}
                <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[rgba(201,168,76,0.2)]" />
                <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[rgba(201,168,76,0.2)]" />
                <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[rgba(201,168,76,0.2)]" />
                <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[rgba(201,168,76,0.2)]" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(201,168,76,0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
                    <span className="font-display text-[14px] tracking-[3px] text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        VIEW DETAILS
                    </span>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 font-display text-[13px] tracking-[2px] text-[#3a3830]">
                    {project.year}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#5a5650] mb-2">
                    {project.category} · {project.location}
                </div>
                <h3 className="font-display text-[20px] tracking-[1px] text-[#f0ede6] mb-3 leading-tight">
                    {project.title}
                </h3>
                {/* Material tags */}
                <div className="flex flex-wrap gap-1">
                    {project.materials.map((m) => (
                        <span
                            key={m}
                            className={`text-[10px] font-medium px-2 py-[3px] border rounded ${MATERIAL_COLORS[m] || "border-[rgba(201,168,76,0.2)] text-[#7a7570]"
                                }`}
                        >
                            {m}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom sweep line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
    );
}

function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(10,12,16,0.92)" }}
            onClick={onClose}
        >
            <div
                className="bg-[#141720] border border-[rgba(201,168,76,0.25)] rounded w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: "modalIn 0.3s ease" }}
            >
                <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.96) translateY(12px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

                {/* Modal image placeholder */}
                <div className="relative h-48 bg-[#0a0c10] flex items-center justify-center">
                    <div className="font-display text-[100px] text-[rgba(201,168,76,0.06)] leading-none select-none">
                        {project.id.toString().padStart(2, "0")}
                    </div>
                    <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[rgba(201,168,76,0.3)]" />
                    <span className="absolute top-3 right-12 w-6 h-6 border-t border-r border-[rgba(201,168,76,0.3)]" />
                    <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[rgba(201,168,76,0.3)]" />
                    <span className="absolute bottom-3 right-12 w-6 h-6 border-b border-r border-[rgba(201,168,76,0.3)]" />
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-[#5a5650] hover:text-[#c9a84c] transition-colors text-lg"
                    >
                        ✕
                    </button>
                    <div className="absolute bottom-3 left-3 font-display text-[13px] tracking-[2px] text-[#c9a84c]">
                        {project.year}
                    </div>
                </div>

                {/* Modal content */}
                <div className="p-7">
                    <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#5a5650] mb-2">
                        {project.category}
                    </div>
                    <h2 className="font-display text-[28px] tracking-[1.5px] text-[#f0ede6] mb-1">
                        {project.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-5">
                        <span className="text-[#c9a84c] text-[12px]">📍</span>
                        <span className="text-[13px] text-[#7a7570]">{project.location}</span>
                    </div>

                    <p className="text-[13px] text-[#a09c92] leading-[1.85] mb-6">
                        {project.desc}
                    </p>

                    <div className="border-t border-[rgba(201,168,76,0.1)] pt-5">
                        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#c9a84c] mb-3">
                            Materials Used
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.materials.map((m) => (
                                <span
                                    key={m}
                                    className={`text-[11px] font-medium px-3 py-1 border rounded ${MATERIAL_COLORS[m] || "border-[rgba(201,168,76,0.2)] text-[#7a7570]"
                                        }`}
                                >
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="mt-6 block w-full text-center bg-[#c9a84c] text-[#0d0f14] font-semibold text-[13px] py-3 rounded tracking-wider hover:bg-[#e0b95a] transition-colors duration-200"
                    >
                        Start a Similar Project →
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function PastWork() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeProject, setActiveProject] = useState(null);

    const filtered =
        activeCategory === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeCategory);

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
      `}</style>

            {/* ── PAGE HEADER ── */}
            <div className="px-6 md:px-12 pt-28 pb-14 border-b border-[rgba(201,168,76,0.12)]">
                <div className="flex items-center gap-3 mb-5 fade-up">
                    <span className="block w-8 h-[1px] bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase">
                        Our Portfolio
                    </span>
                </div>
                <h1 className="font-display text-[clamp(48px,9vw,100px)] leading-[0.92] tracking-[2px] text-[#f0ede6] fade-up">
                    PAST
                    <br />
                    <span className="text-[#c9a84c]">WORK</span>
                </h1>
                <p className="text-[#7a7570] text-[15px] leading-relaxed max-w-lg mt-5 fade-up">
                    Projects we've supplied materials for — across facades, interiors,
                    glass work and ceiling systems in Haryana and beyond.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-10 mt-10 fade-up">
                    {[
                        { num: "500+", label: "Projects" },
                        { num: "12+", label: "Years" },
                        { num: "5", label: "States" },
                        { num: "200+", label: "Clients" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="font-display text-[36px] text-[#c9a84c] leading-none">
                                {s.num}
                            </div>
                            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#5a5650] mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FILTER TABS ── */}
            <div className="px-6 md:px-12 pt-10 pb-4 flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[12px] font-semibold tracking-[0.14em] uppercase px-5 py-2 rounded border transition-all duration-200 ${activeCategory === cat
                                ? "bg-[#c9a84c] text-[#0d0f14] border-[#c9a84c]"
                                : "bg-transparent text-[#5a5650] border-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.5)] hover:text-[#c9a84c]"
                            }`}
                    >
                        {cat}
                        <span className="ml-2 text-[10px] opacity-60">
                            ({cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length})
                        </span>
                    </button>
                ))}
            </div>

            {/* ── PROJECT GRID ── */}
            <div className="px-6 md:px-12 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
                    {filtered.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setActiveProject}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-24">
                        <div className="font-display text-[48px] text-[rgba(201,168,76,0.1)] tracking-widest">
                            NO PROJECTS
                        </div>
                        <p className="text-[#3a3830] text-[13px] mt-2">
                            No projects found in this category yet.
                        </p>
                    </div>
                )}
            </div>

            {/* ── NOTE ── */}
            <div className="px-6 md:px-12 pb-8">
                <div className="border-l-2 border-[rgba(201,168,76,0.3)] pl-4">
                    <p className="text-[12px] text-[#3a3830] leading-relaxed">
                        Note: Project images will be added here once photography is
                        available. Cards currently show project numbers as placeholders.
                    </p>
                </div>
            </div>

            {/* ── CTA ── */}
            <div className="px-6 md:px-12 py-16 border-t border-[rgba(201,168,76,0.12)]">
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
                            START YOUR
                            <br />
                            <span className="text-[#c9a84c]">NEXT PROJECT</span>
                        </h2>
                        <p className="text-[14px] text-[#7a7570] mt-2 max-w-sm">
                            Get premium materials with fast delivery and trade pricing.
                        </p>
                    </div>
                    <a
                        href="/contact"
                        className="relative z-10 bg-[#c9a84c] text-[#0d0f14] font-semibold text-[14px] px-10 py-4 rounded tracking-wider whitespace-nowrap hover:bg-[#e0b95a] hover:-translate-y-[2px] transition-all duration-200"
                    >
                        Get a Quote →
                    </a>
                </div>
            </div>

            {/* ── MODAL ── */}
            <ProjectModal
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
        </div>
    );
}