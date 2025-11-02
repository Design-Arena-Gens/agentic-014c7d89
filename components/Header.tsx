"use client"
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  { label: 'Programs', href: '/programs' },
  { label: 'Research', href: '/research' },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Library', href: '/library' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-responsive h-[var(--header-height)] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600 text-white font-extrabold">VV</span>
          <div>
            <span className="font-display font-extrabold text-lg leading-none">Valley View</span>
            <div className="text-xs text-slate-500 leading-none">University</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="text-sm font-semibold">Contact</Link>
          <Link href="/admissions" className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-white text-sm font-semibold shadow-glow hover:bg-brand-700">Apply</Link>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ring-1 ring-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-responsive py-3 grid gap-2">
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className="py-2 text-slate-700" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="pt-3 flex gap-3">
              <Link href="/contact" className="text-sm font-semibold" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/admissions" className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-white text-sm font-semibold" onClick={() => setOpen(false)}>Apply</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
