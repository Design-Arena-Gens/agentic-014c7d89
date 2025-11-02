export default function ResearchPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Research</h1>
      <p className="mt-4 max-w-2xl text-slate-600">Interdisciplinary research addressing health, education, technology, and community impact.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
          <h3 className="font-semibold">Health & Community</h3>
          <p className="mt-2 text-slate-600">Public health interventions and community wellness programs.</p>
        </div>
        <div className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
          <h3 className="font-semibold">Technology & Innovation</h3>
          <p className="mt-2 text-slate-600">AI, data systems, and digital transformation for Africa.</p>
        </div>
      </div>
    </section>
  )
}
