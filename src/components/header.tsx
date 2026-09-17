"use client";
import { useRef, useState } from "react";
import { site } from "@/content/site";
import { Arrow } from "./icons";
export function Header({ simple = false }: { simple?: boolean }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="header"
      id="top"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <div className="header-row container">
        <a className="brand" href="/" aria-label="Marlow Auto Detail home">
          <img
            src="/brand/logo-dark.svg"
            width="180"
            height="43"
            alt={site.name}
          />
        </a>
        {simple ? (
          <a className="text-link" href="/">
            Back to home
            <Arrow />
          </a>
        ) : (
          <>
            <nav className="desktop-nav" aria-label="Main navigation">
              {site.nav.map(([label, id]) => (
                <a key={id} href={`/#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <a className="button header-cta" href="/#booking">
              {site.bookingCta}
              <Arrow />
            </a>
            <button
              ref={trigger}
              className="menu-trigger"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close" : "Menu"}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </>
        )}
      </div>
      {!simple && (
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {site.nav.map(([label, id]) => (
            <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
              <Arrow />
            </a>
          ))}
          <a href="/#booking" onClick={() => setOpen(false)}>
            Plan your detail
            <Arrow />
          </a>
        </nav>
      )}
    </header>
  );
}
