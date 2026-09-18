import Section from '../components/Section'
import aboutMe from '../assets/img/aboutme.png'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="挑戦が経験となる">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <img
          src={aboutMe}
          alt="suzukiyo"
          className="h-32 w-32 shrink-0 rounded-full border-2 border-brand-500/50 object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-white">自己紹介</h2>
          <p className="mt-2">
            東京在住のフリーランスのシステムエンジニア。1983年生まれ、既婚（子1人）。
            大学卒業後、ベンチャー企業に就職し、官公庁、銀行、クレジットカード、FX、
            アパレルといったさまざまな業種のシステム開発に携わる。今はフリーランスで
            Webアプリ、Androidアプリ開発などを行う。
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">スキル</h2>
        <p className="mt-2">
          Java / PHP / Perl / Ruby / Go / Python / JavaScript ...。Linuxコマンド、SQLも
          十分に扱えます。開発環境はIntelliJやVS Codeがメイン。最近はAWSやGCPを
          暇なときに触ってみたり、最新技術への探求も日々行っています。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">経験業務</h2>
        <p className="mt-2">
          銀行 / クレジットカード / FX / アパレル / ウェディング / 広告 / レジャーなど。
          多くの業種のWebアプリケーション開発を経験することで知見を高めています。
        </p>
      </div>
    </Section>
  )
}
