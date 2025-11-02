import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-emerald-500" />
      <svg className="absolute -right-20 -top-20 opacity-30" width="400" height="400" viewBox="0 0 200 200" fill="none">
        <path d="M30 100c0-38 32-70 70-70s70 32 70 70-32 70-70 70S30 138 30 100Z" stroke="white" strokeWidth="4" />
      </svg>
      <div className="relative container-responsive py-16 sm:py-20 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Your journey starts here</h2>
            <p className="mt-2 text-white/90 max-w-prose">Join a thriving community that nurtures character, leadership, and innovation. Scholarships available for exceptional students.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link href="/admissions" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold shadow-md hover:bg-white/90">Start Application</Link>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/40 px-5 py-3 text-white font-semibold hover:bg-white/15">Talk to Admissions</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
