export default function NewsPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">News</h1>
      <p className="mt-4 text-slate-600">Latest updates from across the university.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white">
            <span className="badge">Press</span>
            <h3 className="mt-3 font-semibold">VVU signs MoU with industry partner #{i}</h3>
            <p className="mt-2 text-sm text-slate-600">Strengthening internships and research collaborations.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
