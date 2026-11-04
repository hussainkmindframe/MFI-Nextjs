'use client'

"use client";

/**
 * Header Component — Responsive (Mindframe India)
 * Desktop: Center nav + hamburger opens right sidebar
 * Mobile: Hamburger opens right sidebar
 */


import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/utils/authStore";

const gold = "#c9a84c";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      {
        name: "Branding Solutions",
        children: [
          { name: "Brand Identity", path: "/services/branding-agency-in-mumbai" },
          { name: "Brand Services", path: "/services/leading-branding-companies-in-mumbai" },
          { name: "Above The Line", path: "/services/atl" },
          { name: "Below The Line", path: "/services/btl-advertising-services-in-mumbai" },
          { name: "Media Buying", path: "/services/media-buying-agency-in-mumbai" },
          { name: "Public Relation", path: "/services/pr-agency-in-mumbai" },
        ],
      },
      {
        name: "Digital Marketing",
        children: [
          { name: "Digital Marketing", path: "/services/digital-marketing-agency-in-mumbai" },
          { name: "Marketing Branding", path: "/services/unlocking-the-power-of-innovative-c-mind-frame-india" },
          { name: "Customized Campaign Design", path: "/services/advertising-campaign-designing" },
          { name: "Advertizing Services", path: "/services/top-digital-marketing-agency-in-india" },
        ],
      },
      {
        name: "Creative Solutions",
        children: [
          { name: "Creative Designing", path: "/services/creative-design-agency-in-mumbai" },
          { name: "Augmented Reality / Virtual Reality", path: "/services/augmented-reality-and-virtual-reality" },
          { name: "2D & 3D / Animation Videos", path: "/services/2d-and-3d-animation-services" },
          { name: "Best Television Advertising Agency", path: "/services/best-television-advertising-agency-in-mumbai-tv-ads-campaigns" },
        ],
      },
      { name: "Website Development", path: "/services/website-development" },
      { name: "Mobile App Development", path: "/services/best-mobile-app-development-company-in-mumbai" },
    ],
  },
  { label: "Our Work", to: "/creative-communication-and-advertising-campaigns" },
  { label: "Client Testimonial", to: "/testimonial" },
  { label: "Blogs", to: "/blogs" },
  { label: "News Room", to: "/news-room" },
  { label: "Contact Us", to: "/contact-us" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false);
  const [sidebarActiveSubMenu, setSidebarActiveSubMenu] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setSidebarOpen(false);
    setServicesOpen(false);
    setActiveSubMenu(null);
    setSidebarServicesOpen(false);
    setSidebarActiveSubMenu(null);
  }, [pathname]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseLeaveServices = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveSubMenu(null);
    }, 150);
  };

  const handleMouseEnterServices = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseEnterSubMenu = (name) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveSubMenu(name);
  };

  const handleMouseLeaveSubMenu = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveSubMenu(null), 150);
  };

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  const linkStyle = (to) => ({
    fontSize: 13.5,
    color: isActive(to) ? gold : "#1a1a1a",
    textDecoration: "none",
    whiteSpace: "nowrap",
    paddingBottom: 3,
    borderBottom: isActive(to) ? `2px solid ${gold}` : "2px solid transparent",
    fontWeight: isActive(to) ? 600 : 400,
    fontFamily: "Georgia, serif",
    transition: "all 0.2s ease",
    cursor: "pointer",
  });

  // Desktop dropdown renderer
  const renderDropdownItems = () => {
    const servicesItem = navLinks.find((l) => l.label === "Services");
    if (!servicesItem?.dropdown) return null;
    return servicesItem.dropdown.map((item) => {
      if (item.children) {
        const isOpen = activeSubMenu === item.name;
        return (
          <div key={item.name} style={{ position: "relative" }}
            onMouseEnter={() => handleMouseEnterSubMenu(item.name)}
            onMouseLeave={handleMouseLeaveSubMenu}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", fontSize: 13.5, color: "#333", borderBottom: "1px solid #f0f0f0", fontFamily: "Georgia, serif", cursor: "pointer", background: isOpen ? "#fafaf8" : "#fff", transition: "background 0.2s" }}>
              {item.name}
              <span style={{ fontSize: 12, color: "#999", transform: isOpen ? "translateX(3px)" : "none", transition: "transform 0.2s" }}>→</span>
            </div>
            <div style={{ position: "absolute", top: 0, left: "100%", background: "#fff", border: "1px solid #eee", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", minWidth: 240, zIndex: 102, opacity: isOpen ? 1 : 0, visibility: isOpen ? "visible" : "hidden", transform: isOpen ? "translateX(0)" : "translateX(-10px)", transition: "all 0.25s ease", pointerEvents: isOpen ? "auto" : "none" }}>
              {item.children.map((child) => (
                <Link key={child.path} href={child.path}
                  onClick={() => { setServicesOpen(false); setActiveSubMenu(null); }}
                  style={{ display: "block", padding: "12px 20px", fontSize: 13, color: "#555", textDecoration: "none", borderBottom: "1px solid #f5f5f5", fontFamily: "Georgia, serif", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#fafaf8"; e.currentTarget.style.color = gold; e.currentTarget.style.paddingLeft = "24px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#555"; e.currentTarget.style.paddingLeft = "20px"; }}
                >{child.name}</Link>
              ))}
            </div>
          </div>
        );
      }
      return (
        <Link key={item.path} href={item.path} onClick={() => setServicesOpen(false)}
          style={{ display: "block", padding: "12px 20px", fontSize: 13.5, color: "#333", textDecoration: "none", borderBottom: "1px solid #f0f0f0", fontFamily: "Georgia, serif", transition: "all 0.2s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#fafaf8"; e.currentTarget.style.color = gold; e.currentTarget.style.paddingLeft = "24px"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#333"; e.currentTarget.style.paddingLeft = "20px"; }}
        >{item.name}</Link>
      );
    });
  };

  // Sidebar nav renderer
  const renderSidebarItems = () => {
    return navLinks.map((link) => {
      if (link.dropdown) {
        return (
          <div key={link.to}>
            <button
              onClick={() => setSidebarServicesOpen(!sidebarServicesOpen)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 28px", background: "none", border: "none", borderBottom: "1px solid #f0f0f0", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 14.5, color: "#1a1a1a", fontWeight: 500, textAlign: "left", transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = gold}
              onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a1a"}
            >
              {link.label}
              <span style={{ fontSize: 11, color: "#aaa", transform: sidebarServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s ease", display: "inline-block" }}>∨</span>
            </button>

            <div style={{ maxHeight: sidebarServicesOpen ? "1000px" : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", background: "#fafaf8" }}>
              {link.dropdown.map((item) => {
                if (item.children) {
                  const isOpen = sidebarActiveSubMenu === item.name;
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setSidebarActiveSubMenu(isOpen ? null : item.name)}
                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 28px 11px 36px", background: "none", border: "none", borderBottom: "1px solid #ebebeb", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 13, color: "#555", textAlign: "left", transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = gold}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#555"}
                      >
                        {item.name}
                        <span style={{ fontSize: 13, color: "#bbb", transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>›</span>
                      </button>
                      <div style={{ maxHeight: isOpen ? "400px" : 0, overflow: "hidden", transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)", background: "#f5f4f1" }}>
                        {item.children.map((child) => (
                          <Link key={child.path} href={child.path}
                            onClick={() => setSidebarOpen(false)}
                            style={{ display: "block", padding: "10px 28px 10px 52px", fontSize: 12.5, color: "#666", textDecoration: "none", borderBottom: "1px solid #ebebeb", fontFamily: "Georgia, serif", transition: "all 0.2s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.background = "#eeede9"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; e.currentTarget.style.background = "transparent"; }}
                          >— {child.name}</Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link key={item.path} href={item.path}
                    onClick={() => setSidebarOpen(false)}
                    style={{ display: "block", padding: "11px 28px 11px 36px", fontSize: 13, color: "#555", textDecoration: "none", borderBottom: "1px solid #ebebeb", fontFamily: "Georgia, serif", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.background = "#f0efeb"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#555"; e.currentTarget.style.background = "transparent"; }}
                  >{item.name}</Link>
                );
              })}
            </div>
          </div>
        );
      }

      return (
        <Link key={link.to} href={link.to}
          onClick={() => setSidebarOpen(false)}
          style={{
            display: "block", padding: "15px 28px", fontSize: 14.5,
            textDecoration: "none",
            color: isActive(link.to) ? gold : "#1a1a1a",
            fontWeight: isActive(link.to) ? 600 : 400,
            fontFamily: "Georgia, serif",
            borderBottom: "1px solid #f0f0f0",
            borderLeft: isActive(link.to) ? `3px solid ${gold}` : "3px solid transparent",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { if (!isActive(link.to)) { e.currentTarget.style.color = gold; e.currentTarget.style.background = "#fafaf8"; } }}
          onMouseLeave={(e) => { if (!isActive(link.to)) { e.currentTarget.style.color = "#1a1a1a"; e.currentTarget.style.background = "transparent"; } }}
        >{link.label}</Link>
      );
    });
  };

  const bar = (extra) => ({
    display: "block", width: 22, height: 2,
    background: sidebarOpen ? gold : "#333",
    borderRadius: 2,
    transition: "all 0.3s ease",
    ...extra,
  });

  return (
    <>
      <style>{`
        .mf-desktop-nav { display: flex; }
        @media (max-width: 900px) {
          .mf-desktop-nav { display: none !important; }
        }
        .mf-logo {
          height: 52px; width: auto; max-width: 180px;
          object-fit: contain; display: block;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .mf-logo:hover { transform: scale(1.03); opacity: 0.9; }
        .mf-sidebar-scroll::-webkit-scrollbar { width: 4px; }
        .mf-sidebar-scroll::-webkit-scrollbar-track { background: #f5f5f5; }
        .mf-sidebar-scroll::-webkit-scrollbar-thumb { background: ${gold}; border-radius: 4px; }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{ background: "#fff", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100, fontFamily: "Georgia, serif", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        <nav style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 72, position: "relative" }}>

          {/* Logo */}
          <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <img src="/assets/logo2.png" alt="Mindframe India Logo" className="mf-logo" />
            </Link>
          </div>

          {/* Desktop Center Nav */}
          <div className="mf-desktop-nav" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", alignItems: "center", gap: 28 }}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to} style={{ position: "relative" }} ref={dropdownRef}
                  onMouseEnter={handleMouseEnterServices} onMouseLeave={handleMouseLeaveServices}
                >
                  <span
                    style={{ ...linkStyle(link.to), display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}
                    onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = gold; e.currentTarget.style.color = gold; }}
                    onMouseOut={(e) => { if (!isActive(link.to)) { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.color = "#1a1a1a"; } }}
                  >
                    {link.label}
                    <span style={{ fontSize: 10, color: servicesOpen ? gold : "#888", transition: "transform 0.2s ease, color 0.2s ease", transform: servicesOpen ? "rotate(180deg)" : "none", display: "inline-block" }}>∨</span>
                  </span>
                  <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, background: "#fff", border: "1px solid #eee", borderRadius: 4, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", minWidth: 240, zIndex: 100, opacity: servicesOpen ? 1 : 0, visibility: servicesOpen ? "visible" : "hidden", transform: servicesOpen ? "translateY(0)" : "translateY(-10px)", transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)", pointerEvents: servicesOpen ? "auto" : "none" }}>
                    {renderDropdownItems()}
                  </div>
                </div>
              ) : (
                <Link key={link.to} href={link.to} style={linkStyle(link.to)}
                  onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = gold; e.currentTarget.style.color = gold; }}
                  onMouseOut={(e) => { if (!isActive(link.to)) { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.color = "#1a1a1a"; } }}
                >{link.label}</Link>
              )
            )}
          </div>

          {/* Hamburger */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 4px", display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}
            >
              <span style={bar({ transform: sidebarOpen ? "rotate(45deg) translateY(7px)" : "none" })} />
              <span style={bar({ opacity: sidebarOpen ? 0 : 1, transform: sidebarOpen ? "scaleX(0)" : "none" })} />
              <span style={bar({ transform: sidebarOpen ? "rotate(-45deg) translateY(-7px)" : "none" })} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── BACKDROP ── */}
      <div
        onClick={() => setSidebarOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 149,
          background: "rgba(10,8,5,0.5)",
          opacity: sidebarOpen ? 1 : 0,
          visibility: sidebarOpen ? "visible" : "hidden",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
        }}
      />

      {/* ── RIGHT SIDEBAR ── */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: 320, maxWidth: "88vw",
        background: "#fff",
        zIndex: 150,
        transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.18)",
        display: "flex", flexDirection: "column",
      }}>

        {/* Sidebar top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 72, borderBottom: `2px solid ${gold}`, flexShrink: 0, background: "#fff" }}>
          <Link href="/" onClick={() => setSidebarOpen(false)} style={{ textDecoration: "none" }}>
            <img src="/assets/logo2.png" alt="Mindframe India" style={{ height: 44, width: "auto", objectFit: "contain" }} />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close"
            style={{ background: "none", border: `1px solid #e0e0e0`, borderRadius: "50%", width: 34, height: 34, cursor: "pointer", color: "#555", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = gold; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#555"; e.currentTarget.style.borderColor = "#e0e0e0"; }}
          >✕</button>
        </div>

        {/* Nav links */}
        <div className="mf-sidebar-scroll" style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          <nav style={{ paddingBottom: 16 }}>
            {renderSidebarItems()}
          </nav>

          {/* Contact block */}
          <div style={{ padding: "20px 28px 28px", borderTop: "1px solid #f0f0f0" }}>
            <p style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: gold, fontFamily: "Georgia, serif", margin: "0 0 12px", fontWeight: 700 }}>Get In Touch</p>
            <p style={{ fontSize: 13, color: "#444", margin: "0 0 3px", fontFamily: "Georgia, serif" }}>+91 9892000733 / +91 9167830733</p>
            <p style={{ fontSize: 13, color: "#444", margin: "0 0 18px", fontFamily: "Georgia, serif" }}>info@mindframeindia.com</p>
            <Link href="/contact-us" onClick={() => setSidebarOpen(false)}
              style={{ display: "inline-block", padding: "10px 22px", background: gold, color: "#fff", fontSize: 12.5, fontFamily: "Georgia, serif", textDecoration: "none", letterSpacing: 0.5, borderRadius: 2, transition: "background 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#b8943a"}
              onMouseLeave={(e) => e.currentTarget.style.background = gold}
            >Contact Us →</Link>
          </div>
        </div>
      </div>
    </>
  );
}



