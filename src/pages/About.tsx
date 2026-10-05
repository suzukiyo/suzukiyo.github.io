import Section from '../components/Section'
import aboutMe from '../assets/img/aboutme.png'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="挑戦が経験となる">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <img
          src={aboutMe}
          alt="suzukiyo"
          className="h-28 w-28 shrink-0 rounded-full border-2 border-brand-500/50 object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-white">
            フルスタックエンジニア / SRE。東京在住、フリーランス。
          </p>
          <p className="mt-2 text-sm text-gray-400">
            銀行・クレジットカード・FX・アパレルなど多業種のWeb/Androidアプリ開発を経験。
            インフラ運用から開発まで一人で担えるのが強みです。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">今やっていること</h2>
        <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
          {[
            'Java / Go / Ruby / Python / TypeScript',
            'AWS / Kubernetes / Terraform',
            'Claude Code を使ったAI駆動開発',
          ].map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-white">連絡先</h2>
        <p className="mt-2 text-sm text-gray-400">
          X (Twitter) / YouTube からお気軽にどうぞ。詳しくは
          <a href="/contact" className="ml-1 text-brand-400 hover:underline">
            Contact
          </a>
          へ。
        </p>
      </div>
    </Section>
  )
}
