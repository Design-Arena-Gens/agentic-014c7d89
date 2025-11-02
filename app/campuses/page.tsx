export default function CampusesPage() {
  const campuses = [
    { name: 'Oyibi (Main Campus)', location: 'Greater Accra' },
    { name: 'Techiman Campus', location: 'Bono East' },
    { name: 'Kumasi Campus', location: 'Ashanti' },
  ]
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Campuses</h1>
      <p className="mt-4 text-slate-600">Beautiful, green campuses that inspire learning and community.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {campuses.map((c) => (
          <div key={c.name} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{c.location}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
