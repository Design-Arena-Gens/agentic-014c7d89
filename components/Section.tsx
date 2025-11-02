export default function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  )
}
