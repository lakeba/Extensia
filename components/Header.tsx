"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { LogoMark } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => window.innerWidth > 980 && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const links = nav.map((l) => (
    <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
      {l.label}
    </Link>
  ));

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-in">
        <Link className="logo" href="/" aria-label="Extensia home">
          <LogoMark />
          Extensia
        </Link>
        <nav className="nav-links" aria-label="Main">{links}</nav>
        <div className="nav-cta">
          <Link className="btn btn-ghost btn-sm" href="/help">Log in</Link>
          <Link className="btn btn-primary btn-sm" href="/join">Join waitlist</Link>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div className="mobile-menu" id="mobileMenu" hidden={!open}>
        <nav className="wrap" aria-label="Mobile">{links}</nav>
      </div>
    </header>
  );
}
