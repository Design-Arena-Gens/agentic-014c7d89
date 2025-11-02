export default function ProgramsPage() {
  const programs = [
    { title: 'BSc Computer Science', level: 'Undergraduate' },
    { title: 'BBA Accounting', level: 'Undergraduate' },
    { title: 'BSc Nursing', level: 'Undergraduate' },
    { title: 'MBA Finance', level: 'Postgraduate' },
    { title: 'MEd Educational Admin & Leadership', level: 'Postgraduate' },
  ]
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Programs</h1>
      <p className="mt-4 max-w-2xl text-slate-600">Explore industry-aligned degree programs with strong practicals and internships.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white card-hover">
            <span className="badge">{p.level}</span>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">Duration: 4 years (UG), 2 years (PG)</p>
          </div>
        ))}
      </div>
    </section>
  )
}
