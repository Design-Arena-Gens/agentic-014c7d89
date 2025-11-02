import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-16">
      <div className="container-responsive py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500 text-white font-extrabold">VV</span>
              <div>
                <span className="font-display font-extrabold text-lg leading-none text-white">Valley View</span>
                <div className="text-xs text-slate-400 leading-none">University</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">Excellence, Integrity, Service. A Seventh-day Adventist institution in Ghana.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
              <li><Link href="/library" className="hover:text-white">Library</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/news" className="hover:text-white">News</Link></li>
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/research" className="hover:text-white">Research</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Stay in touch</h4>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-md bg-slate-900/50 border border-slate-700 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              <button className="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700">Join</button>
            </form>
            <div className="mt-4 flex gap-4 text-slate-400">
              <a href="#" aria-label="Twitter" className="hover:text-white">\
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A3.9 3.9 0 0 0 12 7.6c0 .3 0 .6.1.9C8.1 8.3 4.7 6.5 2.6 3.7c-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.5 1.9 2.6 3.5 2.6A7.9 7.9 0 0 1 2 17.6 11 11 0 0 0 7.9 19c6.7 0 10.4-5.5 10.4-10.4v-.5c.7-.4 1.4-1.1 1.7-1.9Z" fill="currentColor"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">\
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 10h3l-1 4h-2v8h-4v-8H7v-4h2V8a4 4 0 0 1 4-4h3v4h-3v2Z" fill="currentColor"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">\
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800/60 pt-6 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>? {new Date().getFullYear()} Valley View University. All rights reserved.</p>
          <p>Designed with ?? for a brighter future.</p>
        </div>
      </div>
    </footer>
  )
}
