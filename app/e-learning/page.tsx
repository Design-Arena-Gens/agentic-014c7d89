export default function ELearningPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Online & Distance Learning</h1>
      <p className="mt-4 text-slate-600">Flexible, high-quality programs designed for working professionals and remote learners.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {['Short Courses', 'Undergraduate Online', 'Postgraduate Online'].map((t) => (
          <div key={t} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-slate-600">Study anywhere with supportive faculty and tutors.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
