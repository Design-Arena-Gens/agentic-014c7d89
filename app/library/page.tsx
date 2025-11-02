export default function LibraryPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Library</h1>
      <p className="mt-4 max-w-2xl text-slate-600">Digital catalogs, e-resources, and study spaces designed for deep work.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          'Search Catalog', 'E-Journals', 'Research Help'
        ].map((t) => (
          <div key={t} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-slate-600">Access world-class resources and support.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
