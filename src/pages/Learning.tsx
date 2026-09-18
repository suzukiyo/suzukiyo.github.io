import Section from '../components/Section'

const topics = [
  {
    name: 'オブジェクト指向開発',
    content:
      'オブジェクト指向エクササイズとTDD、DDDを軸に、オブジェクト指向開発を最大に引き出すために研究する。',
  },
  {
    name: 'スムーズな開発環境',
    content: '開発環境の構築の自動化（Dockerなど）について研究する。',
  },
  {
    name: '効果的SEO戦略',
    content: '効果的なSEOロジックをパターン化し、最適なSEOを選択可能にするよう研究する。',
  },
  {
    name: 'モデリング',
    content:
      'モデリングはドメインによって様々なものになり得る。しかしどういったもので型として確立することができるものを研究する。',
  },
  {
    name: 'エンジニアチームビルディング',
    content: 'エンジニアチームをまとめるのは至難の業である。その中で効果的な手法を研究する。',
  },
]

export default function Learning() {
  return (
    <Section id="learning" title="Learning">
      <ul className="grid gap-6 sm:grid-cols-2">
        {topics.map((topic) => (
          <li
            key={topic.name}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="font-bold text-white">{topic.name}</h2>
            <p className="mt-2 text-sm text-gray-400">{topic.content}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
