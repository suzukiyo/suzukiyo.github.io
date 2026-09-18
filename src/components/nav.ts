export type NavItem = {
  to: string
  label: string
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Top' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/learning', label: 'Learning' },
  { to: '/repositories', label: 'Repositories' },
  { to: '/contact', label: 'Contact' },
]
