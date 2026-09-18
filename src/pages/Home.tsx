import { Link } from 'react-router-dom'
import heroBg from '../assets/img/hero-bg.jpg'

export default function Home() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-cover bg-fixed bg-center text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative px-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          suzukiyo
        </h1>
        <p className="mt-4 text-lg text-brand-100 sm:text-2xl">「挑戦が経験となる」</p>
        <p className="mx-auto mt-6 max-w-xl text-sm text-gray-300 sm:text-base">
          東京在住のフリーランスエンジニア。サーバサイドを軸にフルスタックで開発し、
          日々新しい技術と向き合っています。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            About Me
          </Link>
          <Link
            to="/repositories"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Repositories
          </Link>
        </div>
      </div>
    </section>
  )
}
