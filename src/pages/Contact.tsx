import Section from '../components/Section'
import { XIcon, YouTubeIcon } from '../components/SocialIcons'

const socials = [
  { href: 'https://twitter.com/suzukiy0', label: 'X (Twitter)', Icon: XIcon },
  {
    href: 'https://www.youtube.com/channel/UCYy_9fXWvRzOOvTs5V63KHA',
    label: 'YouTube',
    Icon: YouTubeIcon,
  },
]

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-center">お気軽にSNSからご連絡ください。</p>
      <div className="flex justify-center gap-8">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-brand-400"
          >
            <Icon className="h-9 w-9" />
            <span className="text-xs">{label}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
