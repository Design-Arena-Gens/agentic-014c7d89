export default function InternationalPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">International Students</h1>
      <p className="mt-4 text-slate-600">Join a multicultural community with support for visas, housing, and integration.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
          <h3 className="font-semibold">Visa Guidance</h3>
          <p className="mt-2 text-slate-600">Step-by-step assistance to help you settle in Ghana.</p>
        </div>
        <div className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
          <h3 className="font-semibold">Accommodation</h3>
          <p className="mt-2 text-slate-600">Safe and comfortable housing options on and off-campus.</p>
        </div>
      </div>
    </section>
  )
}
