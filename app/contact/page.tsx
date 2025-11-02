export default function ContactPage() {
  return (
    <section className="container-responsive py-16 sm:py-24">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Contact</h1>
      <p className="mt-4 text-slate-600">We are here to help. Reach out to admissions or general inquiries.</p>
      <form className="mt-8 grid gap-4 max-w-xl">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-brand-200" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-brand-200" />
        </div>
        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-brand-200" />
        </div>
        <button className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-white font-semibold hover:bg-brand-700 w-fit">Send</button>
      </form>
    </section>
  )
}
