import { FacebookIcon, XIcon, YouTubeIcon } from './SocialIcons'

const socials = [
  { href: 'https://www.facebook.com/suzukiy0', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://twitter.com/suzukiy0', label: 'X (Twitter)', Icon: XIcon },
  {
    href: 'https://www.youtube.com/channel/UCYy_9fXWvRzOOvTs5V63KHA',
    label: 'YouTube',
    Icon: YouTubeIcon,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-gray-400 transition-colors hover:text-brand-400"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">© 2015–{year} suzukiyo.</p>
      </div>
    </footer>
  )
}
