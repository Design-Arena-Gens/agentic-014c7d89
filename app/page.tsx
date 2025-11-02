import Image from 'next/image'
import Link from 'next/link'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <div>
      <section className="gradient-hero relative overflow-hidden">
        <div className="container-responsive pt-16 pb-20 sm:pt-20 sm:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge">Est. 1979 ? Ghana</span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Empowering learners to impact Africa and the world
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl">
                Discover an Adventist center of excellence with industry-aligned programs, hands-on research, and a Christ-centered community.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/admissions" className="inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-white font-semibold shadow-glow hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200">
                  Apply Now
                </Link>
                <Link href="/programs" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold ring-1 ring-slate-200 hover:ring-slate-300">
                  Explore Programs
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <dt className="text-sm text-slate-500">Programs</dt>
                  <dd className="text-2xl font-bold">60+</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Campuses</dt>
                  <dd className="text-2xl font-bold">3</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Alumni</dt>
                  <dd className="text-2xl font-bold">25k+</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl ring-1 ring-slate-200 overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1604881986474-c0aa5920c22d?q=80&w=1480&auto=format&fit=crop"
                  alt="Students on campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-10 -left-10 rotate-2 hidden md:block">
                <div className="rounded-xl bg-white/80 backdrop-blur ring-1 ring-slate-200 p-4 shadow-lg">
                  <p className="text-sm font-medium">Top 10 Ghana private university</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-responsive py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Undergraduate',
              href: '/programs',
              img: 'https://images.unsplash.com/photo-1517840933437-c41356892b35?q=80&w=1480&auto=format&fit=crop'
            },
            {
              title: 'Postgraduate',
              href: '/programs',
              img: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1480&auto=format&fit=crop'
            },
            {
              title: 'Online & Distance',
              href: '/e-learning',
              img: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1480&auto=format&fit=crop'
            }
          ].map((card) => (
            <Link key={card.title} href={card.href} className="group relative rounded-2xl overflow-hidden ring-1 ring-slate-200 card-hover">
              <div className="relative h-64">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container-responsive py-16 sm:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">News & Events</h2>
              <p className="mt-2 text-slate-600">Stories of impact, research breakthroughs, and campus life.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/news" className="link-underline">All News</Link>
              <Link href="/events" className="link-underline">All Events</Link>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 card-hover">
                <div className="relative h-48">
                  <Image src={`https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1480&auto=format&fit=crop`} alt="Campus" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="badge">Announcement</span>
                  <h3 className="mt-3 text-lg font-semibold">VVU hosts innovation week {i}</h3>
                  <p className="mt-2 text-slate-600">Collaborations with industry partners to solve real-world challenges.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
