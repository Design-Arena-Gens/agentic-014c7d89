import Link from 'next/link'

export default function AdmissionsPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Admissions</h1>
      <p className="mt-4 max-w-2xl text-slate-600">We welcome students who seek a values-based education and a vibrant campus life. Explore requirements, deadlines, and scholarships.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Undergraduate Admissions', href: '/programs' },
          { title: 'Postgraduate Admissions', href: '/programs' },
          { title: 'International Students', href: '/international' }
        ].map((item) => (
          <Link key={item.title} href={item.href} className="rounded-xl ring-1 ring-slate-200 p-6 bg-white card-hover">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">Start your application today.</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
