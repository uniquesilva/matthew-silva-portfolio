"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { containerClass } from "@/components/container";
import { navLinks, SITE_NAME } from "@/data/site";

function NavAnchor({
  href,
  className,
  children,
  onClick,
  linkRef,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  linkRef?: React.Ref<HTMLAnchorElement>;
}) {
  if (href.endsWith(".pdf")) {
    return (
      <a
        ref={linkRef}
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link ref={linkRef} href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className={`${containerClass} flex h-16 items-center justify-between gap-4`}>
        <Link href="/" className="text-sm font-medium tracking-tight text-ink">
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavAnchor
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-ink-soft hover:text-ink"
                >
                  {link.label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <nav id={panelId} aria-label="Mobile" className="border-t border-line bg-paper md:hidden">
          <ul className={`${containerClass} flex flex-col py-2`}>
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <NavAnchor
                  linkRef={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  className="flex min-h-12 items-center text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
