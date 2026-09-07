import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Moon } from "lucide-react";

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress = Math.min(scrollY / 100, 1);
  const scrolled = scrollY > 40;

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      {/* Outer glow when scrolled */}
      {scrolled && (
        <div
          className="absolute inset-0 rounded-[100px] pointer-events-none transition-opacity duration-700"
          style={{
            opacity: progress * 0.6,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,210,180,0.35) 0%, rgba(210,180,255,0.15) 60%, transparent 100%)",
            filter: "blur(12px)",
            transform: "scale(1.04)",
          }}
        />
      )}

      {/* Main pill */}
      <div
        className="relative flex items-center justify-between px-6 py-3 rounded-[100px] transition-all duration-500 overflow-hidden"
        style={{
          backdropFilter: `blur(${14 + progress * 22}px) saturate(${140 + progress * 100}%) brightness(${1 + progress * 0.06})`,
          WebkitBackdropFilter: `blur(${14 + progress * 22}px) saturate(${140 + progress * 100}%) brightness(${1 + progress * 0.06})`,
          background: scrolled
            ? `linear-gradient(160deg,
                rgba(255,255,255,${0.08 + progress * 0.06}) 0%,
                rgba(255,245,235,${0.05 + progress * 0.04}) 50%,
                rgba(240,235,255,${0.05 + progress * 0.04}) 100%)`
            : "rgba(255,255,255,0.55)",
          border: "1px solid transparent",
          boxShadow: scrolled
            ? `0 8px 40px rgba(0,0,0,${0.04 + progress * 0.06}),
               0 2px 8px rgba(0,0,0,0.03),
               inset 0 1.5px 0 rgba(255,255,255,${0.5 + progress * 0.4})`
            : "0 4px 16px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.2)",
        }}
      >
        {/* ── Specular caustic highlight (top edge shimmer) ── */}
        <div
          className="absolute inset-x-4 top-0 h-px rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            opacity: progress,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 70%, transparent 100%)",
          }}
        />

        {/* ── Iridescent prismatic tint overlay ── */}
        <div
          className="absolute inset-0 rounded-[100px] pointer-events-none transition-opacity duration-500"
          style={{
            opacity: progress * 0.8,
            background:
              "linear-gradient(120deg, rgba(255,180,160,0.07) 0%, rgba(200,160,255,0.06) 35%, rgba(160,210,255,0.07) 65%, rgba(255,200,160,0.05) 100%)",
          }}
        />

        {/* ── Top-half gloss (glass dome effect) ── */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 rounded-t-[100px] pointer-events-none transition-opacity duration-500"
          style={{
            opacity: progress * 0.3,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* ── Nav links ── */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#111111]">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#certifications", label: "Certifications" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-black transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
        </ul>

        {/* ── Icons ── */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/avinashrockzz2000-prog"
            target="_blank"
            rel="noreferrer"
            className="text-[#111111] hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/avinashs09/"
            target="_blank"
            rel="noreferrer"
            className="text-[#111111] hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" strokeWidth={1.5} />
          </a>
          <a
            href="mailto:avinash.santhoshk@gmail.com"
            className="text-[#111111] hover:text-black transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" strokeWidth={1.5} />
          </a>
          <a
            href="tel:+353894845705"
            className="text-[#111111] hover:text-black transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6" strokeWidth={1.5} />
          </a>
          <button className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#111111] transition-colors">
            <Moon className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}
