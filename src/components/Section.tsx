import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-3 text-center text-lg text-brand-400">「{subtitle}」</p>
      )}
      <div className="mt-12 space-y-10 leading-relaxed text-gray-300">{children}</div>
    </section>
  )
}
