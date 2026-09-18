import Section from '../components/Section'

export default function Work() {
  return (
    <Section id="work" title="Work" subtitle="あたりまえをやる">
      <div>
        <h2 className="text-xl font-bold text-white">フルスタックであり続ける</h2>
        <p className="mt-2">
          サーバサイドエンジニアをメインで開発しているが、フルスタックなエンジニアで
          ありたいと思っている。フロントサイドもインフラも必要な時代と言われているが、
          どうだっていい。ただ自分で動くものを作りたいんだ。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">誰が見てもわかるコードを書く習慣を作る</h2>
        <p className="mt-2">
          コードを書いて仕事は終わりではない。そのあとそのコードを調査・修正する人がいる。
          エレガントなコードを追求することも良いが、一番大切なことは人間が読めるコードである。
        </p>
      </div>
    </Section>
  )
}
