"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  // Close on route change hash or resize > md
  useEffect(() => {
    function onResize() { if (window.innerWidth >= 768) setOpen(false); }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/what-we-take', label: 'What We Take' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="border-b-4 border-brand-accent bg-[color:var(--color-surface)] text-white backdrop-blur shadow-sm dark:shadow-subtle">
      <div className="container-responsive flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Stark Strong LLC Home" onClick={() => setOpen(false)}>
          <Image src="/images/StarkStrongLogo.gif" alt="Stark Strong LLC" width={140} height={48} priority className="h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand-accent transition" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton />
        </div>
        <button aria-label="Toggle navigation" onClick={() => setOpen(o => !o)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/30 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/60">
          <span className="sr-only">Menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {/* Mobile panel */}
      <div className={`md:hidden transition-[max-height] duration-400 overflow-hidden bg-[var(--color-accent)] border-t border-white/20 ${open ? 'max-h-[480px]' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 p-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40">
              <span>{l.label}</span>
              <svg className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <CTAButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
