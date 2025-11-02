export default function EventsPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Events</h1>
      <p className="mt-4 text-slate-600">Conferences, seminars, and campus life.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <article key={i} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <span className="badge">Upcoming</span>
            <h3 className="mt-3 font-semibold">Innovation Week Day {i}</h3>
            <p className="mt-2 text-sm text-slate-600">Workshops, pitches, and keynotes.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
