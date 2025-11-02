export default function AlumniPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Alumni</h1>
      <p className="mt-4 text-slate-600">Stay connected, give back, and mentor the next generation.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {['Chapters', 'Alumni Stories', 'Support VVU'].map((t) => (
          <div key={t} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-slate-600">Be part of our global community.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
