'use client';

import { useState } from 'react';

const QUOTE_URL = 'https://texasflange.com/contact-us/?ref=weldneckflanges';

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main">
      <div className="site-nav-bar">
        <a href="/" className="site-nav-brand">Weld Neck Flanges</a>
        <button
          type="button"
          className="site-nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav-links"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <div id="site-nav-links" className={open ? 'site-nav-links open' : 'site-nav-links'}>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/#products">Products</a>
          <a href="/#materials">Materials</a>
          <a href={QUOTE_URL} className="site-nav-cta">Request a Quote</a>
        </div>
      </div>
    </nav>
  );
}
