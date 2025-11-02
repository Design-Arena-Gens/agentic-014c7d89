export default function AboutPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold text-slate-900">About Valley View University</h1>
        <p className="mt-4 text-slate-600">Founded on Adventist values of excellence, integrity, and service, Valley View University nurtures character and competence through holistic education.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">Mission</h3>
            <p className="mt-2 text-slate-600">To educate, transform, and impact society for God and humanity.</p>
          </div>
          <div className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <h3 className="font-semibold">Vision</h3>
            <p className="mt-2 text-slate-600">To be a center of excellence in Christian education in Africa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
