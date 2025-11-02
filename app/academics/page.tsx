export default function AcademicsPage() {
  const faculties = [
    { name: 'School of Business', summary: 'Accounting, Finance, Marketing, HR' },
    { name: 'School of Science & Technology', summary: 'Computer Science, IT, Engineering' },
    { name: 'School of Education', summary: 'Curriculum, Leadership, Counseling' },
    { name: 'School of Nursing & Midwifery', summary: 'Nursing, Public Health' },
  ]
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Academics</h1>
      <p className="mt-4 max-w-2xl text-slate-600">Rigorous programs, caring faculty, and modern labs to prepare you for impact.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {faculties.map((f) => (
          <div key={f.name} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">{f.name}</h3>
            <p className="mt-2 text-slate-600">{f.summary}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
