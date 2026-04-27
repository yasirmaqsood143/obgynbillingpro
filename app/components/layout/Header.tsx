"use client";

// src/components/layout/Header.tsx
// Phase 1 — Client Component (required for scroll/state/pathname hooks)
// Styled with inline styles + a single <style> block — no Tailwind scanning required.
// All existing logic preserved: scroll effect, dropdown, mobile menu, active states.

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── Nav data ────────────────────────────────────────────────────────────────
const navLinks = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Global Maternity Billing",  href: "/global-maternity-billing"  },
      { label: "GYN Surgery Coding",        href: "/gyn-surgery-coding"        },
      { label: "Denial Management",         href: "/denial-management"         },
      { label: "Revenue Cycle Management",  href: "/revenue-cycle-management"  },
      { label: "Credentialing",             href: "/credentialing"             },
      { label: "Telehealth Billing",        href: "/telehealth-billing"        },
      { label: "Practice Setup",            href: "/practice-setup"            },
      { label: "Coding Audits",             href: "/coding-audits"             },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Blog",    href: "/blog"    },
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
];

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg:          "#0D1F2D",
  bgScroll:    "rgba(11,26,40,0.97)",
  teal:        "#0E7C7B",
  tealHover:   "#065F5E",
  tealGlow:    "rgba(14,124,123,0.35)",
  textPrimary: "#EDF2F7",
  textMuted:   "#8EAAB8",
  border:      "rgba(255,255,255,0.08)",
  dropdownBg:  "#0A1929",
  activeBg:    "rgba(14,124,123,0.12)",
} as const;

// ─── Component ────────────────────────────────────────────────────────────────
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const phone = process.env.NEXT_PUBLIC_PHONE ?? "{{PHONE}}";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Global header styles ─────────────────────────────────────────── */}
      <style>{`
        /* Nav links */
        .hdr-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 7px 12px;
          font-size: 13.5px;
          font-weight: 500;
          color: ${T.textMuted};
          text-decoration: none;
          border-radius: 7px;
          border: 1px solid transparent;
          transition: color 0.18s, background 0.18s, border-color 0.18s;
          white-space: nowrap;
          cursor: pointer;
          background: transparent;
          letter-spacing: 0.01em;
        }
        .hdr-nav-link:hover {
          color: ${T.textPrimary};
          background: rgba(255,255,255,0.05);
        }
        .hdr-nav-link.active {
          color: ${T.teal};
          background: ${T.activeBg};
          border-color: rgba(14,124,123,0.2);
        }

        /* Chevron */
        .hdr-chevron {
          width: 14px; height: 14px;
          transition: transform 0.22s ease;
          color: ${T.textMuted};
          flex-shrink: 0;
        }
        .hdr-services-wrapper:hover .hdr-chevron,
        .hdr-chevron.open { transform: rotate(180deg); }

        /* Dropdown panel */
        .hdr-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          width: 248px;
          background: ${T.dropdownBg};
          border: 1px solid ${T.border};
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,124,123,0.08);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
          z-index: 100;
        }
        .hdr-services-wrapper:hover .hdr-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .hdr-dropdown-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          font-size: 13px;
          font-weight: 450;
          color: ${T.textMuted};
          text-decoration: none;
          border-radius: 7px;
          transition: color 0.15s, background 0.15s;
        }
        .hdr-dropdown-item::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: ${T.teal};
          opacity: 0.4;
          flex-shrink: 0;
          transition: opacity 0.15s, transform 0.15s;
        }
        .hdr-dropdown-item:hover {
          color: ${T.textPrimary};
          background: rgba(14,124,123,0.1);
        }
        .hdr-dropdown-item:hover::before { opacity: 1; transform: scale(1.3); }
        .hdr-dropdown-item.active {
          color: ${T.teal};
          background: rgba(14,124,123,0.12);
          font-weight: 500;
        }
        .hdr-dropdown-item.active::before { opacity: 1; }

        /* Phone link */
        .hdr-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: ${T.teal};
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 7px;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .hdr-phone:hover {
          color: #4ecdc4;
          background: rgba(14,124,123,0.08);
        }

        /* CTA button */
        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          background: ${T.teal};
          color: white;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.18s, box-shadow 0.18s, transform 0.15s;
          box-shadow: 0 0 22px ${T.tealGlow};
        }
        .hdr-cta:hover {
          background: ${T.tealHover};
          box-shadow: 0 0 32px rgba(14,124,123,0.5);
          transform: translateY(-1px);
        }
        .hdr-cta:active { transform: translateY(0) scale(0.98); }
        .hdr-cta-arrow {
          transition: transform 0.18s ease;
        }
        .hdr-cta:hover .hdr-cta-arrow { transform: translateX(3px); }

        /* Hamburger button */
        .hdr-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 8px;
          border: 1px solid ${T.border};
          background: transparent;
          color: ${T.textMuted};
          cursor: pointer;
          transition: color 0.18s, background 0.18s, border-color 0.18s;
          flex-shrink: 0;
        }
        .hdr-hamburger:hover {
          color: white;
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.15);
        }

        /* Mobile menu */
        .hdr-mobile-panel {
          overflow: hidden;
          transition: max-height 0.32s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.28s ease;
          border-top: 1px solid ${T.border};
        }
        .hdr-mobile-panel.open  { max-height: 640px; opacity: 1; }
        .hdr-mobile-panel.closed { max-height: 0;    opacity: 0; pointer-events: none; }

        .hdr-mobile-link {
          display: block;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 500;
          color: ${T.textMuted};
          text-decoration: none;
          border-radius: 9px;
          transition: color 0.15s, background 0.15s;
        }
        .hdr-mobile-link:hover { color: white; background: rgba(255,255,255,0.05); }
        .hdr-mobile-link.active { color: ${T.teal}; background: ${T.activeBg}; }

        .hdr-mobile-services-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 500;
          color: ${T.textMuted};
          background: transparent;
          border: none;
          border-radius: 9px;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
          text-align: left;
        }
        .hdr-mobile-services-btn:hover { color: white; background: rgba(255,255,255,0.05); }

        .hdr-mobile-sub {
          overflow: hidden;
          transition: max-height 0.25s ease;
        }
        .hdr-mobile-sub.open  { max-height: 400px; }
        .hdr-mobile-sub.closed { max-height: 0; }

        .hdr-mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px 9px 24px;
          font-size: 13px;
          color: ${T.textMuted};
          text-decoration: none;
          border-radius: 7px;
          transition: color 0.15s, background 0.15s;
        }
        .hdr-mobile-sub-link::before {
          content: '›';
          color: ${T.teal};
          font-size: 16px;
          opacity: 0.6;
        }
        .hdr-mobile-sub-link:hover { color: white; background: rgba(255,255,255,0.04); }
        .hdr-mobile-sub-link.active { color: ${T.teal}; }

        /* Divider inside mobile */
        .hdr-mobile-divider {
          height: 1px;
          background: ${T.border};
          margin: 10px 0;
        }

        /* Teal accent line under logo icon */
        .hdr-logo-icon {
          width: 38px; height: 38px;
          border-radius: 9px;
          background: linear-gradient(135deg, ${T.teal} 0%, #0a9e9c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px ${T.tealGlow};
        }

        /* Top accent bar */
        .hdr-accent-bar {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, ${T.teal} 40%, #0a9e9c 60%, transparent 100%);
          opacity: 0.7;
        }

        /* Separator dot between nav items */
        .hdr-nav-sep {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
        }
      `}</style>

      {/* ── Fixed Header ─────────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? T.bgScroll : T.bg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled
            ? "0 2px 24px rgba(0,0,0,0.35), 0 1px 0 rgba(14,124,123,0.15)"
            : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Accent line at very top */}
        <div className="hdr-accent-bar" />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}>

            {/* ── Logo ───────────────────────────────────────────────────── */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", flexShrink: 0 }}>
              <div className="hdr-logo-icon">
                {/* Medical cross / pulse icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="8" y="3" width="4" height="14" rx="1.5" fill="white" fillOpacity="0.95" />
                  <rect x="3" y="8" width="14" height="4" rx="1.5" fill="white" fillOpacity="0.95" />
                </svg>
              </div>
              <div style={{ lineHeight: 1 }}>
                <span style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "-0.02em",
                }}>
                  OBGYNBilling<span style={{ color: T.teal }}>Pro</span>
                </span>
                <span style={{
                  display: "block",
                  color: T.textMuted,
                  fontSize: 9.5,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginTop: 3,
                }}>
                  Women's Health RCM
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ────────────────────────────────────────────── */}
            <nav
              aria-label="Main navigation"
              style={{ display: "flex", alignItems: "center", gap: 2 }}
              className="hdr-desktop-nav"
            >
              <style>{`
                @media (max-width: 1023px) { .hdr-desktop-nav { display: none !important; } }
              `}</style>

              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={link.label} className="hdr-services-wrapper" style={{ position: "relative" }}>
                    <button
                      className={`hdr-nav-link${isActive(link.href) ? " active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      {/* Chevron SVG */}
                      <svg className="hdr-chevron" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div className="hdr-dropdown" role="menu">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={`hdr-dropdown-item${isActive(item.href) ? " active" : ""}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`hdr-nav-link${isActive(link.href) ? " active" : ""}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Desktop Right Actions ──────────────────────────────────── */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }} className="hdr-desktop-actions">
              <style>{`
                @media (max-width: 1023px) { .hdr-desktop-actions { display: none !important; } }
              `}</style>

              {/* Phone */}
              <a href={`tel:${phone}`} className="hdr-phone">
                {/* Phone icon */}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M12 9.33a1 1 0 0 1-.22 1C10.7 11.42 9.23 12 7.67 12 4.54 12 1 8.46 1 5.33 1 3.77 1.58 2.3 2.67 1.22a1 1 0 0 1 1 .22l1.67 1.67a1 1 0 0 1 0 1.33L4.22 5.56a7 7 0 0 0 3.22 3.22l1.12-1.12a1 1 0 0 1 1.33 0L12 9.33z"
                    fill="currentColor"/>
                </svg>
                {phone}
              </a>

              {/* Divider */}
              <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />

              {/* CTA */}
              <Link href="/contact" className="hdr-cta">
                Free Revenue Audit
                <svg className="hdr-cta-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* ── Mobile Hamburger ──────────────────────────────────────── */}
            <button
              className="hdr-hamburger hdr-mobile-only"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <style>{`
                .hdr-mobile-only { display: none; }
                @media (max-width: 1023px) { .hdr-mobile-only { display: flex !important; } }
              `}</style>
              {mobileOpen ? (
                /* X icon */
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M0 1h18M0 7h12M0 13h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
        <div
          id="mobile-menu"
          className={`hdr-mobile-panel ${mobileOpen ? "open" : "closed"}`}
        >
          <div style={{
            background: "#0A1929",
            padding: "12px 16px 20px",
          }}>

            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="hdr-mobile-services-btn"
                    onClick={() => setServicesOpen((p) => !p)}
                    aria-expanded={servicesOpen}
                  >
                    <span>{link.label}</span>
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{ transition: "transform 0.22s ease", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", color: T.textMuted }}
                    >
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className={`hdr-mobile-sub ${servicesOpen ? "open" : "closed"}`}>
                    <div style={{
                      marginLeft: 8,
                      paddingLeft: 12,
                      borderLeft: `2px solid rgba(14,124,123,0.3)`,
                      marginBottom: 4,
                    }}>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`hdr-mobile-sub-link${isActive(item.href) ? " active" : ""}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hdr-mobile-link${isActive(link.href) ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="hdr-mobile-divider" />

            {/* Mobile phone + CTA */}
            <a href={`tel:${phone}`} style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              color: T.teal,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              marginBottom: 10,
            }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M12 9.33a1 1 0 0 1-.22 1C10.7 11.42 9.23 12 7.67 12 4.54 12 1 8.46 1 5.33 1 3.77 1.58 2.3 2.67 1.22a1 1 0 0 1 1 .22l1.67 1.67a1 1 0 0 1 0 1.33L4.22 5.56a7 7 0 0 0 3.22 3.22l1.12-1.12a1 1 0 0 1 1.33 0L12 9.33z"
                  fill="currentColor"/>
              </svg>
              {phone}
            </a>

            <Link href="/contact" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "13px 0",
              background: T.teal,
              color: "white",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.02em",
              borderRadius: 9,
              textDecoration: "none",
              boxShadow: `0 4px 18px ${T.tealGlow}`,
            }}>
              Free Revenue Audit →
            </Link>
          </div>
        </div>
      </header>

      {/* ── Spacer: prevents content hiding under fixed header ──────────── */}
      <div style={{ height: 70 }} aria-hidden="true" />
    </>
  );
}