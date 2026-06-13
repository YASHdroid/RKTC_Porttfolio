import { useState } from "react";

const CONTACT_INFO = [
    {
        icon: "📍",
        label: "Address",
        value: "123, Industrial Area, Sector 4\nKurukshetra, Haryana - 136118",
        link: null,
    },
    {
        icon: "📞",
        label: "Phone",
        value: "+91 98765 43210",
        link: "tel:+919876543210",
    },
    {
        icon: "✉️",
        label: "Email",
        value: "info@rktc.in",
        link: "mailto:info@rktc.in",
    },
    {
        icon: "🕐",
        label: "Working Hours",
        value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed",
        link: null,
    },
];

const PRODUCT_OPTIONS = [
    "ACP Sheets",
    "Aluminium Sections",
    "Toughened Glass",
    "PVC Sheets",
    "HPL Cladding",
    "Acrylic Sheets",
    "False Ceiling Systems",
    "Other",
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // TODO: connect to your backend API
        // await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(form) })
        await new Promise((r) => setTimeout(r, 1200)); // simulated delay
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-[#0d0f14] text-[#f0ede6] font-sans min-h-screen">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        body { font-family: 'Inter', sans-serif; }

        .input-field {
          width: 100%;
          background: #141720;
          border: 1px solid rgba(201,168,76,0.15);
          color: #f0ede6;
          font-size: 14px;
          padding: 14px 16px;
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .input-field::placeholder { color: #3a3830; }
        .input-field:focus { border-color: rgba(201,168,76,0.6); }
        .input-field option { background: #141720; color: #f0ede6; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(13,15,20,0.3);
          border-top-color: #0d0f14;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
      `}</style>

            {/* ── PAGE HEADER ── */}
            <div className="px-6 md:px-12 pt-28 pb-14 border-b border-[rgba(201,168,76,0.12)]">
                <div className="flex items-center gap-3 mb-5 fade-up">
                    <span className="block w-8 h-[1px] bg-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-[11px] font-semibold tracking-[0.22em] uppercase">
                        Get In Touch
                    </span>
                </div>
                <h1 className="font-display text-[clamp(48px,9vw,100px)] leading-[0.92] tracking-[2px] text-[#f0ede6] fade-up">
                    LET'S TALK
                    <br />
                    <span className="text-[#c9a84c]">MATERIALS</span>
                </h1>
                <p className="text-[#7a7570] text-[15px] leading-relaxed max-w-md mt-5 fade-up">
                    Need a quote, want to check availability, or just have a question?
                    Fill the form and we'll respond within 24 hours.
                </p>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl">

                {/* ── CONTACT INFO CARDS ── */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {CONTACT_INFO.map((c) => (
                        <div
                            key={c.label}
                            className="bg-[#141720] border border-[rgba(201,168,76,0.1)] rounded p-6 hover:border-[rgba(201,168,76,0.35)] transition-colors duration-200"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-[2px]">{c.icon}</div>
                                <div>
                                    <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c9a84c] mb-1">
                                        {c.label}
                                    </div>
                                    {c.link ? (
                                        <a
                                            href={c.link}
                                            className="text-[14px] text-[#a09c92] hover:text-[#c9a84c] transition-colors duration-200 whitespace-pre-line"
                                        >
                                            {c.value}
                                        </a>
                                    ) : (
                                        <p className="text-[14px] text-[#a09c92] whitespace-pre-line">
                                            {c.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Quick note */}
                    <div className="mt-4 border-l-2 border-[#c9a84c] pl-4">
                        <p className="text-[13px] text-[#5a5650] leading-relaxed">
                            For bulk orders and contractor partnerships, mention your
                            requirements in the message — we offer special trade pricing.
                        </p>
                    </div>
                </div>

                {/* ── CONTACT FORM ── */}
                <div className="lg:col-span-3">
                    {submitted ? (
                        /* ── SUCCESS STATE ── */
                        <div className="bg-[#141720] border border-[rgba(201,168,76,0.2)] rounded p-12 flex flex-col items-center justify-center text-center min-h-[480px] fade-up">
                            <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] flex items-center justify-center text-[#c9a84c] text-3xl mb-6">
                                ✓
                            </div>
                            <h2 className="font-display text-[36px] tracking-[2px] text-[#f0ede6] mb-3">
                                INQUIRY SENT!
                            </h2>
                            <p className="text-[14px] text-[#7a7570] max-w-xs leading-relaxed mb-8">
                                We've received your message and will get back to you within 24
                                hours with pricing and availability.
                            </p>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setForm({ name: "", phone: "", email: "", product: "", message: "" });
                                }}
                                className="border border-[rgba(201,168,76,0.4)] text-[#c9a84c] text-[13px] font-medium px-6 py-3 rounded tracking-wider hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.07)] transition-all duration-200"
                            >
                                Send Another Inquiry
                            </button>
                        </div>
                    ) : (
                        /* ── FORM ── */
                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#141720] border border-[rgba(201,168,76,0.1)] rounded p-8 md:p-10"
                        >
                            <h2 className="font-display text-[28px] tracking-[2px] text-[#f0ede6] mb-8">
                                SEND AN INQUIRY
                            </h2>

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#5a5650] mb-2">
                                        Full Name <span className="text-[#c9a84c]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Rahul Kumar"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#5a5650] mb-2">
                                        Phone <span className="text-[#c9a84c]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+91 98765 43210"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#5a5650] mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#5a5650] mb-2">
                                        Product Interested In
                                    </label>
                                    <select
                                        name="product"
                                        value={form.product}
                                        onChange={handleChange}
                                        className="input-field"
                                    >
                                        <option value="" disabled>
                                            Select a product...
                                        </option>
                                        {PRODUCT_OPTIONS.map((p) => (
                                            <option key={p} value={p}>
                                                {p}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-8">
                                <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#5a5650] mb-2">
                                    Message / Requirements <span className="text-[#c9a84c]">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell us your project details, quantity needed, dimensions, location..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className="input-field resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#c9a84c] text-[#0d0f14] font-semibold text-[14px] py-4 rounded tracking-wider hover:bg-[#e0b95a] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Inquiry →"
                                )}
                            </button>

                            <p className="text-[12px] text-[#3a3830] text-center mt-4">
                                We'll respond within 24 hours on working days.
                            </p>
                        </form>
                    )}
                </div>
            </div>

            {/* ── MAP PLACEHOLDER ── */}
            <div className="px-6 md:px-12 pb-16">
                <div className="bg-[#141720] border border-[rgba(201,168,76,0.1)] rounded overflow-hidden h-[260px] flex items-center justify-center relative">
                    <div className="text-center">
                        <div className="font-display text-[48px] text-[rgba(201,168,76,0.08)] tracking-widest mb-2">
                            MAP
                        </div>
                        <p className="text-[13px] text-[#3a3830]">
                            Replace with a Google Maps embed for your actual location
                        </p>
                        {/* 
              To embed Google Maps, replace this div contents with:
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                width="100%" height="260" style={{border:0}} allowFullScreen loading="lazy"
              />
            */}
                    </div>
                    <div className="absolute bottom-4 left-6 text-[11px] tracking-[0.16em] uppercase text-[#c9a84c] font-semibold">
                        📍 Kurukshetra, Haryana
                    </div>
                </div>
            </div>
        </div>
    );
}