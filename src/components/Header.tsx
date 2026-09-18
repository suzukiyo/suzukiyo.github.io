import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from './nav'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-brand-400 ${
      isActive ? 'text-brand-400' : 'text-gray-200'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-lg font-bold tracking-tight text-white">
          suzukiyo<span className="text-brand-400">.</span>
        </NavLink>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="メニューを開閉する"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-base font-medium ${
                  isActive ? 'bg-white/5 text-brand-400' : 'text-gray-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
