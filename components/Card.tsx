import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 card-hover">
      {children}
    </div>
  )
}
