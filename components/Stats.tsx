export default function Stats() {
  const stats = [
    { label: 'Programs', value: '60+' },
    { label: 'Campuses', value: '3' },
    { label: 'Alumni', value: '25k+' },
    { label: 'Clubs', value: '40+' },
  ]
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-5">
          <dt className="text-sm text-slate-600">{s.label}</dt>
          <dd className="text-2xl font-bold text-slate-900">{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}
