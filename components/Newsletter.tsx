export default function Newsletter() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-emerald-50 ring-1 ring-brand-100 p-6">
      <h3 className="font-semibold text-slate-900">Subscribe to our newsletter</h3>
      <p className="mt-1 text-sm text-slate-600">Get news, events, and program updates in your inbox.</p>
      <form className="mt-4 flex flex-col sm:flex-row gap-2">
        <input type="email" placeholder="Email address" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-brand-200" />
        <button className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-white font-semibold hover:bg-brand-700 w-fit">Subscribe</button>
      </form>
    </div>
  )
}
